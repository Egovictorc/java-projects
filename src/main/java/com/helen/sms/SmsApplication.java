package com.helen.sms;

import com.helen.sms.config.ConfigProps;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableConfigurationProperties(ConfigProps.class)
public class SmsApplication {


	@Value("${config.frontendUrl}")
	String frontend;
	public static void main(String[] args) {
		SpringApplication.run(SmsApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {

		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods;
						//.allowedHeaders("*")  // Allowed HTTP headers;
						.allowedOrigins(frontend);
						//.allowedOrigins("http://localhost:5173");
			}
		};
	}

}
