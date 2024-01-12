use tauri::*;

use crate::ALLOWED_DOMAINS;

pub mod child_window;
pub mod commands;
pub mod config;
pub mod menu;

pub use menu::MenuBuilder;
pub use updater::AppUpdaterBuilder;

mod updater;

pub fn window_post_init<R: Runtime>(window: &Window<R>) -> Result<()> {
  #[cfg(target_os = "macos")]
  window.eval(include_str!("macos.js")).unwrap();

  #[cfg(target_os = "windows")]
  window.setup_menu()?;

  Ok(())
}

pub fn on_navigation(url: &url::Url) -> bool {
  if !url.domain().is_some_and(|domain| ALLOWED_DOMAINS.contains(&domain)) {
    open::that(url.as_str()).unwrap();
    return false;
  }

  true
}

#[cfg(target_os = "macos")]
pub fn window_event_handler(event: tauri::GlobalWindowEvent) {
  if !event.window().label().contains("main") {
    return;
  };

  if event.window().app_handle().windows().iter().filter(|w| w.0.contains("main")).nth(1).is_some() {
    return;
  }

  if let tauri::WindowEvent::CloseRequested { api, .. } = event.event() {
    event.window().app_handle().hide().unwrap();
    api.prevent_close();
  }
}

fn open_help_docs<R: Runtime>(#[allow(unused)] app: &AppHandle<R>) -> Result<()> {
  #[cfg(target_os = "windows")]
  {
    _ = open::that("https://docs.ics-it.ru/gramax");
  }

  #[cfg(not(target_os = "windows"))]
  {
    if let Some(window) = app.get_focused_window() {
      window.eval("location.replace('/docs')")?
    }
  }

  Ok(())
}
