// theme.js
// This file only handles styling for the raccoon website.

const applyStyles = () => {
  const style = document.createElement("style");
  style.innerHTML = `
        body {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            background-color: #2b2b2b;
            color: #f1f1f1;
            margin: 0;
            padding: 20px;
            text-align: center;
        }

        header {
            background-color: #4a4a4a;
            padding: 20px;
            border-radius: 15px;
            border: 3px dashed #a0a0a0;
            margin-bottom: 20px;
        }

        h1, h2 {
            color: #dcdcdc;
            text-shadow: 1px 1px 3px #000;
        }

        nav a {
            color: #88ccff;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.2rem;
            margin: 0 10px;
        }

        nav a:hover {
            color: #ffaa00;
            text-decoration: underline;
        }

        main {
            background-color: #3b3b3b;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.5);
            max-width: 800px;
            margin: auto;
            text-align: left;
            border: 1px solid #555;
        }

        ul {
            line-height: 1.6;
        }

        .gallery p {
            font-size: 1.5rem;
            text-align: center;
            padding: 20px;
            background: #444;
            border-radius: 10px;
        }
    `;
  document.head.appendChild(style);
};

// Apply styles on load
applyStyles();
