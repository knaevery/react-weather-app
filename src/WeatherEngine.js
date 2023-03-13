import "./Weather.css";

export default function WeatherEngine() {
  return (
    <div class="container">
      <body>
        <body cz-shortcut-listen="true">
          <div id="root">
            <div class="App">
              <div class="container">
                <div class="Weather">
                  <form>
                    <div class="row">
                      <div class="col-9">
                        <input
                          type="search"
                          placeholder="Enter a city..."
                          class="form-control search-input"
                          id="city-input"
                          autocomplete="off"
                        />
                      </div>
                      <div class="col-3 p-0">
                        <input
                          type="submit"
                          class="btn btn-primary w-100"
                          value="Search"
                        />
                      </div>
                    </div>
                  </form>
                  <div class="WeatherInfo">
                    <div class="row">
                      <div class="col-6">
                        <h1 class="city" id="city"></h1>
                        <ul className="SearchResults">
                          <li>
                            <div class="description" id="description"></div>
                          </li>
                          <li>
                            Humidity: <strong id="humidity"></strong>
                            <strong>%</strong>, Wind:
                            <strong id="wind"></strong>
                            <strong>km/h</strong>
                          </li>
                          <li>
                            <span>Last updated:</span>
                            <span id="timeAndDate">Tuesday 12:20</span>
                          </li>
                        </ul>
                      </div>
                      <div class="col-6">
                        <div class="temperature-container d-flex justify-content-end">
                          <canvas width="52" height="52">
                            {" "}
                          </canvas>
                          <span>
                            <img
                              src=""
                              alt="Clear"
                              id="icon"
                              class="float-left"
                            />
                          </span>
                          <div>
                            <span class="temperature" id="temperature"></span>
                            <span class="units" id="units">
                              °C
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="WeatherForecast row">
                    <div class="forecast" id="forecast"></div>
                  </div>

                  <small>
                    <a
                      href="https://github.com/knaevery/final-weather-app"
                      target="_blank"
                    >
                      Open source code by Nina Fernando-Bowen
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </body>
      </body>
    </div>
  );
}
