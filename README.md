# 🌡️ Temperature Converter

A beautiful, responsive web application for converting temperatures between Celsius, Fahrenheit, and Kelvin.

## ✨ Features

- **Real-time Conversion**: Convert temperatures instantly as you type
- **Multi-unit Support**: Convert from any unit (°C, °F, K) to all others
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations
- **Quick Reference**: Built-in quick reference guide for common temperatures
- **Accurate Calculations**: Precise temperature conversions rounded to 2 decimal places

## 🚀 Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Enter a temperature value in the input field
4. Select the unit you're converting from (Celsius, Fahrenheit, or Kelvin)
5. View the converted values instantly in the results section

## 📐 Conversion Formulas

### Celsius to Fahrenheit
```
°F = (°C × 9/5) + 32
```

### Celsius to Kelvin
```
K = °C + 273.15
```

### Fahrenheit to Celsius
```
°C = (°F - 32) × 5/9
```

### Fahrenheit to Kelvin
```
K = (°F - 32) × 5/9 + 273.15
```

### Kelvin to Celsius
```
°C = K - 273.15
```

### Kelvin to Fahrenheit
```
°F = (K - 273.15) × 9/5 + 32
```

## 🌡️ Quick Reference

| Temperature | Celsius | Fahrenheit | Kelvin |
|---|---|---|---|
| Water Freezes | 0°C | 32°F | 273.15K |
| Room Temperature | 20°C | 68°F | 293.15K |
| Body Temperature | 37°C | 98.6°F | 310.15K |
| Water Boils | 100°C | 212°F | 373.15K |
| Absolute Zero | -273.15°C | -459.67°F | 0K |

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (Vanilla)**: Real-time conversion logic with no dependencies

## 📁 Project Structure

```
tempconvert/
├── index.html      # Main HTML file with UI structure
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript conversion logic
└── README.md       # This file
```

## 💻 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The application is fully responsive and works perfectly on:
- Desktop computers (1920x1080 and above)
- Tablets (iPad, Android tablets)
- Mobile phones (iPhones, Android phones)

## 📝 Usage Examples

1. **Converting Celsius to other units:**
   - Enter: 25
   - Select: °C
   - Results: 25°C = 77°F = 298.15K

2. **Converting Fahrenheit to other units:**
   - Enter: 68
   - Select: °F
   - Results: 68°F = 20°C = 293.15K

3. **Converting Kelvin to other units:**
   - Enter: 300
   - Select: K
   - Results: 300K = 26.85°C = 80.33°F

## 🎨 Customization

You can easily customize the application by modifying:
- **Colors**: Update the gradient colors in `styles.css` (look for `#667eea` and `#764ba2`)
- **Fonts**: Change font-family in `styles.css`
- **Layout**: Adjust grid and flex properties for different layouts
- **Formulas**: Modify conversion functions in `script.js` if needed

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Made with ❤️ by Temperature Converter**
