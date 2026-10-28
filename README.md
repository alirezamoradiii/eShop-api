<h1 align="center">eShop-api</h1>

<div>
  <h3>
    <img src="./utils/icons/info.svg" alt="info" align="top" />
    About the Project:
  </h3>
</div>
<p>
  A developer-friendly, headless e-commerce backend built to bridge the gap between static mock APIs and complex production systems. Designed for frontend engineers who want to build and test real-world shopping apps—across React, Next.js, Vue, Flutter, or React Native—using actual database relations, real auth, and working business logic without the hassle of setting up a backend from scratch.
</p>

<div>
  <h3>
    <img src="./utils/icons/clipboard-check.svg" alt="clipboard-check" align="top" />
    Prerequisites
  </h3>

  <p>Before getting started, make sure you have installed:</p>

  <ul>
    <li>
      <a href="https://git-scm.com/downloads">Git</a>
    </li>
    <li>
      <a href="https://nodejs.org">Node.js</a> - V24 or later
    </li>
    <li>
      <a href="https://docs.docker.com/get-docker/">
        Docker
      </a> - required only for Docker-based setup
    </li>
    <li>
      <a href="https://www.postgresql.org/download/">
        PostgreSQL
      </a> - required when running locally without Docker
    </li>
  </ul>
</div>

<div>
  <h3>
    <img src="./utils/icons/terminal.svg" alt="terminal" align="top" />
    How to Use
  </h3>

  <h4>1. Clone the repository</h4>
  <pre><code>git clone https://github.com/alirezamoradiii/eShop-api.git<br />cd eShop-api</code></pre>
  <h4>2. Choose your setup method</h4>
  <ul>
    <li>
      <strong><a href="#with-docker">With Docker</a></strong>
    </li>
    <li>
      <strong><a href="#locally">Without Docker</a></strong>
    </li>
  </ul>

  <div id="with-docker">
    <h4>With Docker</h4>
    <ol>
      <li>
        <p>
          Start Docker Desktop, or make sure the Docker daemon is running.
        </p>
      </li>
      <li>
        <p>
          Configure your environment variables using
          <code>.sample.env</code> as a template:
        </p>
        <ul>
          <li>
            <strong>Development:</strong>
            Create a <code>.env.development.local</code> file.
          </li>
          <li>
            <strong>Production:</strong>
            Create a <code>.env</code> file.
          </li>
        </ul>
        <p>
          Fill in the required values for your Docker setup. For the database
          host, use the PostgreSQL service name defined in the Compose file
          instead of <code>localhost</code>.
        </p>
      </li>
      <li>
        <p>
          Navigate to the directory containing the Compose file and start
          the services:
        </p>
        <pre><code>docker compose up -d</code></pre>
        <p>
          This starts the application and PostgreSQL in the background.
        </p>
      </li>
    </ol>
  </div>

  <div id="locally">
    <h4>Without Docker</h4>
    <ol>
    <li>
      <p>Navigate to the server directory and install dependencies:</p>
      <pre><code>cd server <br />npm install</code></pre>
    </li>
    <li>
      <p>
        Configure your environment variables using
        <code>.sample.env</code> as a template:
      </p>
      <ul>
        <li>
          <strong>Development:</strong>
          Create a <code>.env.development.local</code> file.
        </li>
        <li>
          <strong>Production:</strong>
          Create a <code>.env</code> file.
        </li>
      </ul>
      <p>
        Copy the variables from <code>.sample.env</code> into the
        appropriate file and update their values to match your local setup,
        including your PostgreSQL connection settings.
      </p>
    </li>
    <li>
      <p>
        Make sure PostgreSQL is running. Open pgAdmin and create a database
        with the same name specified in your environment file.
      </p>
    </li>
    <li>
      <p>Start the application in your preferred mode:</p>
      <p><strong>Development:</strong></p>
      <pre><code>npm run start:dev</code></pre>
      <p><strong>Production:</strong></p>
      <pre><code>npm run start</code></pre>
    </li>
  </ol>    
  </div>
  

  <h4>
    <img src="./utils/icons/explore.svg" alt="explore" align="center" />
    Explore the API's:
  </h4>
</div>

<p>
  Once the server is running, open the Swagger documentation:<br />
  <a href="http://localhost:3001/api/docs">
  http://localhost:3001/api/docs
  </a>
</p>

<hr />

<h4 align="center">
  If this project helped you, please consider giving it a 
  <a href="https://github.com/alirezamoradiii/eShop-api">
  <img src="./utils/icons/star.svg" alt="star" align="top" width="20" />
  </a> to support its development!
</h4>
