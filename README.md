# Your Project Name

Brief project description goes here.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Potential Problems and Solutions](#Problem-and-solution)
- [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have the following tools installed on your machine:

- Node.js (https://nodejs.org/)
- npm (comes with Node.js installation)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repository.git

   ```

2. Change into the project directory:

   ```bash
   cd your-repository

   ```

3. Install project dependencies:

   ```bash
   npm install

   ```

4. To start the project locally, run the following command:

   ```bash
   npm run dev
   ```

## Problem and solution

### 1. No data on the live website

Data do not appear in the `Popular` and `Recommended` sections.

#### Solution

This project is hosted on the `netlify` and netlify by default blocks any insecure connection. This website is fetching data from an API that is hosted using `http` it doesn't have any SSL certificate so `netlify` will block these API calls. To solve this problem you need to go to the site settings and allow `Insecure content` manually.

#### Illustration

![no-data](https://github.com/EnayetHossain/restaurant/assets/79244474/102f749d-6c2f-474a-9499-b757554a88b4)

## On Chrome

# Click here
![click-here](https://github.com/EnayetHossain/restaurant/assets/79244474/c35daa30-90e0-490c-b141-2b18a6204c38)

# Goto Site settings
![site-settings](https://github.com/EnayetHossain/restaurant/assets/79244474/9239bf23-8584-4577-a279-11eba4f0eb55)

# Scroll down and find Insecure content
![insecure-content](https://github.com/EnayetHossain/restaurant/assets/79244474/7c532b9f-7213-43aa-9d3d-9fd1c8876d74)

# Change it to allow
![change](https://github.com/EnayetHossain/restaurant/assets/79244474/703fc350-9d0f-4365-8d18-d4032cf0603f)

And now refresh your window you should see data now.

## On Firefox

# Click here
![firefox-click](https://github.com/EnayetHossain/restaurant/assets/79244474/b0a5aa67-ba56-466c-83a2-ac540ab0abbd)

# Goto Connection secure
![connection](https://github.com/EnayetHossain/restaurant/assets/79244474/36a00572-f0e6-47c9-af38-32c596881c70)

# Disable Protection
![das](https://github.com/EnayetHossain/restaurant/assets/79244474/355f3f70-c8ff-45d8-ab0a-9f6529badee9)

And now you should see the data.


## License

This project is in the public domain. You are free to use, modify, and distribute the code without any restrictions.
