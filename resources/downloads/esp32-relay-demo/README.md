# ESP32 relay bench demo

Educational example for a classic ESP32 DevKit and a documented, 3.3 V logic-compatible relay module. This example has not been tested on physical hardware. It is not a safety controller.

## Hardware and wiring

- ESP32 DevKit, USB cable, relay module, and jumper wires.
- Verify that GPIO 23 is available on your exact board; change RELAY_PIN if needed.
- With power disconnected, connect GPIO 23 to the module's logic input.
- Supply the module only as specified in its datasheet. A relay coil must never be driven directly from a GPIO.
- Connect the control-side grounds only as required by the module's isolation/wiring documentation. Do not defeat optical isolation by assuming every ground must be joined.
- Do not connect a module that feeds 5 V into an ESP32 GPIO. Use a suitable interface if its input is not 3.3 V compatible.
- Initially leave the relay load terminals disconnected and observe the module's indicator/contact behavior. Any later load test must use an appropriately rated low-voltage DC circuit. This tutorial does not cover mains wiring.

## Run

1. Install Arduino IDE and Espressif's Arduino-ESP32 board package.
2. Open the esp32-relay-demo folder and its matching .ino file.
3. Select your board and serial port. Check RELAY_PIN and ACTIVE_LOW against the documentation.
4. Upload, then open Serial Monitor at 115200 baud.
5. The program sets the output OFF during setup. Send 1 for ON and 0 for OFF. Other characters and line endings are ignored.

## Bench checks

| Step | Expected result |
|---|---|
| Reset after upload | OFF after setup completes |
| Send 1 | Relay ON |
| Send 0 | Relay OFF |
| Send x or a newline | No state change |
| Set ACTIVE_LOW=false for a documented active-high module | Same command behavior |

Software cannot guarantee a safe output during boot, reset, loss of USB power, or faults. GPIOs may float before setup; assess the module's hardware defaults and add an appropriate hardware interlock for any consequential load. Record board, module, supply, polarity, and observations in your test log.

## References

- https://docs.espressif.com/projects/arduino-esp32/en/latest/api/gpio.html
- https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html
