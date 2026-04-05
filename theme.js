const applyStyles = () => {
  const style = document.createElement("style");
  style.innerHTML = `
        body {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            background-color: #000000;
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

        /* New styles for footer and extra sections */
        footer {
            margin-top: 30px;
            padding: 20px;
            background-color: #1a1a1a;
            border-top: 2px solid #555;
            color: #888;
            font-size: 0.9rem;
        }

        .raccoon-facts-container {
            background-color: #2a2a2a;
            border: 2px dashed #ffaa00;
            border-radius: 10px;
            padding: 15px;
            margin: 20px 0;
        }

        .raccoon-facts-container h3 {
            color: #ffaa00;
            margin-top: 0;
        }

        .guestbook-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-top: 25px;
            background: #252525;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #444;
        }

        .guestbook-form label {
            font-weight: bold;
            color: #dcdcdc;
        }

        .guestbook-form input, .guestbook-form textarea {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #555;
            background: #111;
            color: #fff;
            font-family: inherit;
        }

        .guestbook-form button {
            padding: 10px 20px;
            background: #88ccff;
            color: #000;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s;
        }

        .guestbook-form button:hover {
            background: #ffaa00;
        }
    `;
  document.head.appendChild(style);
};

// Apply styles on load
applyStyles();
