![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=flat&logo=chart.js&logoColor=white)

# Taste Wheel — Data Visualization (Chart.js)

An interactive “taste wheel” built with **Chart.js** (doughnut chart) to visualize different flavor categories across multiple intensity levels.  
Users can **click** on a flavor + level segment and get redirected to a details page that shows the selected values.


---

## Demo / Preview

This project is pure **HTML/CSS/JS** (no build tools).  
You can run it locally by opening `index.html` in a browser.


---

## Features

- Doughnut “taste wheel” with 8 flavor categories  
  (`sweet, salty, spicy, rich, smokey, savoury, sour, crunchy`)
- 5 intensity levels (1–5) using stacked datasets
- Click interaction:
  - detects the clicked **flavor**
  - detects the clicked **level**
  - redirects user to `hyperlink.html` with query params
- Custom legend rendered as HTML using `legendCallback()`
- Tailwind is NOT used here (styling is custom CSS)
- Includes SVG logo overlay inside the wheel (`chipsylogo.svg`)

---

## How it works (simple explanation)

### 1) Chart rendering
The wheel is a Chart.js **doughnut** chart with multiple datasets:

- dataset 1 = level 5
- dataset 2 = level 4
- dataset 3 = level 3
- dataset 4 = level 2
- dataset 5 = level 1

Each dataset contains the same labels and values, which creates the layered ring effect.

### 2) Click handling
When a user clicks a segment, the code reads:

- `_index` → label position (flavor)

Then it redirects to:

`hyperlink.html?flavorName=<flavor>&level=<level>`

### 3) Details page
`hyperlink.html` extracts `flavorName` and `level` from the URL query string and displays them.

---

Run "index.html" file
