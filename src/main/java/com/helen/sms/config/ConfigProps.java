package com.helen.sms.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "config")
public record ConfigProps(String frontendUrl) {
}
