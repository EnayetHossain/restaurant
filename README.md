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

1. ![no-data](https://github.com/EnayetHossain/restaurant/assets/79244474/102f749d-6c2f-474a-9499-b757554a88b4)

## License

This project is in the public domain. You are free to use, modify, and distribute the code without any restrictions.
