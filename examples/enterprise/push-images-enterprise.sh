#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 <company_name>"
    exit 1
fi

COMPANY="$1"

SOURCE_REPO="gitlab.ics-it.ru:4567/ics/doc-reader"
TARGET_REPO="gitlab.ics-it.ru:4567/gx/enterprise/$COMPANY"
TAG_NAME="prod"

services=(
    "enterprise-master:enterprise"
    "next-master:docportal"
    "web-master:web"
    "diagram-renderer-master:diagram-renderer"
    "sso-master:sso"
    "auth-master:auth"
)

for service in "${services[@]}"; do
    IFS=":" read -r source_tag target_name <<< "$service"
    
    echo "Processing $source_tag..."
    
    docker pull "$SOURCE_REPO:$source_tag"
    docker tag "$SOURCE_REPO:$source_tag" "$TARGET_REPO/$target_name:$TAG_NAME"
    docker push "$TARGET_REPO/$target_name:$TAG_NAME"
    
    echo "$SOURCE_REPO:$source_tag pushed as $TARGET_REPO/$target_name:$TAG_NAME"
done

echo "All images processed and pushed successfully."
