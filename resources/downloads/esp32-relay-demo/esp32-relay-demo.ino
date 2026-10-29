// ESP32 low-voltage relay bench demo. No Wi-Fi or credentials required.
// Classic ESP32 DevKit example: verify your board's GPIO map before wiring.
#include <Arduino.h>
constexpr uint8_t RELAY_PIN = 23;
constexpr bool ACTIVE_LOW = true;  // Match the relay module datasheet.
constexpr uint8_t RELAY_ON = ACTIVE_LOW ? LOW : HIGH;
constexpr uint8_t RELAY_OFF = ACTIVE_LOW ? HIGH : LOW;

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, RELAY_OFF); // Request OFF immediately after output setup.
  Serial.begin(115200);
  Serial.println("Bench demo: 1=ON, 0=OFF. Starts OFF.");
}

void loop() {
  if (Serial.available() > 0) {
    const char command = Serial.read();
    if (command == '1' || command == '0') {
      const bool on = command == '1';
      digitalWrite(RELAY_PIN, on ? RELAY_ON : RELAY_OFF);
      Serial.println(on ? "Relay ON" : "Relay OFF");
    }
  }
}
