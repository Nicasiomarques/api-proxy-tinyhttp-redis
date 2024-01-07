# Bun.js Proxy API with Redis Cache

This project implements a robust proxy API in Bun.js, leveraging Redis cache to enhance performance. It provides three distinct endpoints for accessing photo-related data.

## Endpoints

1. **List All Photos:**
   - **Endpoint:** `http://localhost:8000/photos`
   - **Method:** GET
   - **Description:** Retrieve a list of all available photos.

   **cURL Example:**
   ```bash
   curl http://localhost:8000/photos
   ```

2. **List Photos by Album:**
   - **Endpoint:** `http://localhost:8000/photos?albumId=1`
   - **Method:** GET
   - **Description:** Retrieve a list of photos associated with a specific album. Replace "1" in the query parameter with the desired album ID.

   **cURL Example:**
   ```bash
   curl http://localhost:8000/photos?albumId=1
   ```

3. **Get Details of a Specific Photo:**
   - **Endpoint:** `http://localhost:8000/photos/photoId`
   - **Method:** GET
   - **Description:** Retrieve detailed information about a specific photo. Replace "photoId" in the endpoint with the desired photo ID.

   **cURL Example:**
   ```bash
   curl http://localhost:8000/photos/photoId
   ```

## Utilized Libraries

- **@tinyhttp/app:** v2.2.1 - Lightweight web framework for Node.js.
- **@tinyhttp/cors:** v2.0.0 - Middleware for handling CORS (Cross-Origin Resource Sharing).
- **milliparsec:** v2.3.0 - Library for parsing URL queries.
- **redis:** v4.6.12 - Redis client for Node.js.

## Environment Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Application:**
   ```bash
   npm start
   ```

## Contribution

Feel free to contribute to this project! Follow the steps below:

1. **Fork this Repository.**
2. **Create a Branch for Your Contribution:**
   ```bash
   git checkout -b your-feature
   ```
3. **Make Your Changes and Commit:**
   ```bash
   git commit -m "Adding feature X"
   ```
4. **Push to Your Fork:**
   ```bash
   git push origin your-feature
   ```
5. **Open a Pull Request here on the Main Repository.**

## Commit Conventions

When contributing, follow the following commit conventions:

- **feat:** New feature
- **fix:** Bug fix
- **chore:** Miscellaneous updates
- **docs:** Documentation updates
- **style:** Style updates (formatting, renaming)
- **test:** Addition or modification of tests

Example Commit:
```bash
git commit -m "feat: Add support for Redis cache"
```

## Contact

Connect with me on LinkedIn: [Nicasio Silva](https://www.linkedin.com/in/nicasio-silva-70320a182)

Thank you for contributing!
