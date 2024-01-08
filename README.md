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

### 1. No data in the live website

Data is not appearing in the `Popular` and `Recommended` section.

#### Solution

This project is hosted on the `netlify` and netlify by default blocks any unsecure connection. This website is fetching data from a API that is hosted using `http` it doesn't have any ssl certificate so `netlify` will block this API calls. To solve this problem you need to go to the site settings and need to allow `Insecure content` manually.

#### Illustration

1. ![Problem Illustration]("C:\Users\Enayet Hossain\Downloads\FireShot\no-data.png")

## License

This project is in the public domain. You are free to use, modify, and distribute the code without any restrictions.
