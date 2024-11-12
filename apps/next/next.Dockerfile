ARG CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX=docker.io

FROM --platform=$BUILDPLATFORM gitlab.ics-it.ru:4567/ics/doc-reader:base-image-${BRANCH:-"develop"} AS deps

WORKDIR /app

COPY ./package.json ./package-lock.json ./
COPY ./apps/browser/package.json ./apps/browser/
COPY ./apps/tauri/package.json ./apps/tauri/
COPY ./apps/next/package.json ./apps/next/
COPY ./e2e/package.json ./e2e/package-lock.json ./e2e/
COPY ./apps/next/crates/next-gramax-git/package.json ./apps/next/crates/next-gramax-git/

RUN npm ci

# TODO: rust caching
# COPY ./Cargo.toml ./Cargo.lock ./recipe.json ./

# RUN cargo install cargo-chef && \
#   cargo chef cook --release --recipe-path recipe.json -p next-gramax-git

FROM deps AS build

WORKDIR /app

ARG BUGSNAG_API_KEY \
  PRODUCTION

ENV BUGSNAG_API_KEY=${BUGSNAG_API_KEY} \
  PRODUCTION=${PRODUCTION} \
  ROOT_PATH=/app/data

COPY . .

RUN echo ${CARGO_BUILD_JOBS} && \
  ./install-deps.sh --ci --node && \
  npm --prefix apps/next run build && \
  rm -rf .npm && \
  git gc --aggressive && \
  git prune && \
  rm -fr ./target ./apps/next/.next/cache

FROM --platform=$TARGETPLATFORM ${CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX}/node:21-bookworm-slim AS run

WORKDIR /app

RUN apt-get update && \
  apt-get install -y git bash && \
  apt-get clean

ARG BRANCH \
  BUGSNAG_API_KEY \
  PRODUCTION \
  SHARE_ACCESS_TOKEN \
  COOKIE_SECRET="."

ENV PORT=80 \
  DIAGRAM_RENDERER_SERVICE_URL=http://gramax-diagram-renderer:80 \
  PRODUCTION=${PRODUCTION} \
  ROOT_PATH=/app/data \
  ENTERPRISE_CONFIG_PATH=/app/config \
  BRANCH=${BRANCH} \
  BUGSNAG_API_KEY=${BUGSNAG_API_KEY} \
  AUTO_PULL_INTERVAL=180 \
  AUTO_PULL_TOKEN="" \
  SHARE_ACCESS_TOKEN=${SHARE_ACCESS_TOKEN} \
  COOKIE_SECRET=${COOKIE_SECRET}

# TODO: Move to build args
# ENV SSO_SERVICE_URL=http://localhost:3000

RUN mkdir -p $ROOT_PATH
COPY --from=build /app .

# TODO: temp solution; delete in future
RUN git config --global url."https://gitlab.ics-it.ru/".insteadOf git@gitlab.ics-it.ru:

STOPSIGNAL SIGTERM

ENTRYPOINT ["npm", "--prefix", "apps/next", "run", "start"]
