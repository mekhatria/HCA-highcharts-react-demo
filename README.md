# Getting Started with Highcharts React

A simple guide to create your first Highcharts chart in a React application using Vite.

## Prerequisites

- Node.js (version 18 or newer)
- npm (comes with Node.js)
- VS Code (or any code editor)

## Installation Steps

### 1. Create Project Folder
```bash
mkdir react101
cd react101
```

### 2. Create React App with Vite
```bash
npm create vite@latest my-chart-app -- --template react
```

When prompted about "rolldown-vite (Experimental)", select **No** (press Enter).

### 3. Navigate into Project
```bash
cd my-chart-app
```

### 4. Install Base Dependencies
```bash
npm install
```

### 5. Install Highcharts Packages
```bash
npm install highcharts @highcharts/react
```

## Create Your First Chart

### 6. Edit App.jsx

Open `src/App.jsx` and replace all content with:
```jsx
import React from 'react';
import { Chart, Title, Series } from '@highcharts/react';

const App = () => (
  <div>
    <Chart>
      <Title>My First Chart</Title>
      <Series type="line" data={[1, 2, 3]} />
    </Chart>
  </div>
);

export default App;
```

### 7. Start Development Server
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see your chart!

## Add Multiple Series (Optional)

Update `src/App.jsx` to add a second series:
```jsx
import React from 'react';
import { Chart, Title, Series } from '@highcharts/react';

const App = () => (
  <div>
    <Chart>
      <Title>My Configured Chart</Title>
      <Series type="line" data={[1, 2, 3]} />
      <Series type="area" data={[3, 2, 1]} />
    </Chart>
  </div>
);

export default App;
```

Save the file and Vite will automatically refresh your browser!

## What You'll See

- An interactive line chart with the title "My First Chart"
- Hover tooltips showing data values
- With the second series added: both a line and area chart displayed together

## Learn More

- [Highcharts Documentation](https://www.highcharts.com/docs/react/getting-started)
- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)

## License

This project is for educational purposes as part of Highcharts Academy.
