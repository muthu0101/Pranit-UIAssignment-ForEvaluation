import React from 'react';
import RewardPoints from './RewardPoints';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTY3IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgMTY3IDU0Ij4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNLjIzMi4xNjhoMjQuNjY5djM5Ljc4OEguMjMyeiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCA1My43MzVoMTY2LjlWLjMzN0gweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMS41NCAuMTY4KSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjMDA2MjlCIiBkPSJNMTMuMzE0IDEwLjU0NWMtMy4yODcgMC02LjA0MyAxLjExMi04LjIwMSAzLjJWLjE2OEguMjMzdjM5Ljc4OGg0Ljg4VjIzLjQ4MmMwLTQuNzUgMy4yODctOC4yMiA3LjgzNS04LjIyIDQuNDE2IDAgNy4wNzIgMi44OTcgNy4wNzIgNy43ODJ2MTYuOTEyaDQuODh2LTE3LjM1YzAtNy4yMS00LjY0Ny0xMi4wNjEtMTEuNTg2LTEyLjA2MSIgbWFzaz0idXJsKCNiKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA2MjlCIiBkPSJNNjMuNTggMzEuMDI4YzAtMy4xIDIuNzU1LTQuOTUyIDcuMzctNC45NTIgMy4xNTQgMCA1LjY0NC40NzIgNy42MzYuOTQzdjIuMDU1YzAgMy45NDItMy43MTggNi45MDctOC42MzIgNi45MDctMy4xNTQgMC02LjM0MS0xLjY1MS02LjM0MS00Ljg1MnYtLjFoLS4wMzN6bTcuNzM1LTIwLjExMmMtNC4xMTcgMC03LjIzNyAxLjIxMi05LjcyNyAyLjM5MmwtMS4wMy41MDUgMS44NiA0LjUxNCAxLjE2Mi0uNjA2YzIuNjIyLTEuMzQ4IDUuMDQ2LTEuOTg4IDcuNjAzLTEuOTg4IDMuMjg2IDAgNy4xNyAxLjE0NiA3LjM3IDYuNDM1LTEuOTU5LS40MzgtNC4yNS0uODA5LTcuNDA0LS44MDktNy42MzYgMC0xMi41ODMgMy44NDEtMTIuNTgzIDkuODA0di4xMDFjMCA2LjE2NSA1Ljc3NyA5LjUgMTEuMjU1IDkuNSA0LjA1IDAgNi44NzMtMS41MTUgOC43NjUtMy4xNjZ2Mi41MjdoNC44NDhWMjIuNDM3Yy0uMDY3LTcuMTc1LTQuNTgyLTExLjUyMS0xMi4xMTktMTEuNTIxek05MS4wNyAxNS44MzR2LTQuNDhoLTQuODh2MjguODM4aDQuODhWMjguMTY1YzAtOC4yODggNS4wNDYtMTEuOTk0IDEwLjA5My0xMS45OTRoMS40NnYtNS4yNTVoLTEuMTYxYy0zLjk1MSAwLTcuNzM2IDEuNjg0LTEwLjM5MiA0LjkxOE0xMTYuNDAyIDM1LjgxMmMtMi43NTYgMC00LjAxOC0xLjIxMy00LjAxOC0zLjkwOFYxNi4xMzdoOS4xM3YtNS4yMjJoLTkuMTNWMi44OTdoLTQuODh2OC4wMThoLTMuMjg3djUuMjIyaDMuMjg3djE2LjAzN2MwIDUuMjIyIDMuMjU0IDguNDU2IDguNSA4LjQ1NiAxLjcyNiAwIDMuMTg3LS4zMzcgNC43NDctMS4wNDVsLjY5OC0uMzM2di01LjAybC0xLjY5NC43NzVjLTEuMzYuNjA2LTIuMjU3LjgwOC0zLjM1My44MDgiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA2MjlCIiBkPSJNMTM0LjYzIDE1LjQ2NGM1LjAxMyAwIDcuMzcgMy44NCA4IDcuODE2aC0xNi4xNjhjLjgzLTQuNTgyIDQuMTE3LTcuODE2IDguMTY3LTcuODE2bS4xLTQuNzVjLTcuNjAzIDAtMTMuNTQ2IDYuNTY5LTEzLjU0NiAxNC45OTF2LjEwMWMwIDguNTU4IDYuMDEgMTQuOTkyIDEzLjk0NCAxNC45OTIgNS45NzYgMCA5LjM2My0yLjg2MyAxMS42NTQtNS4zNTZsLjgzLS45MS0zLjUyLTMuMTY3LS43OTYuODc2Yy0yLjM1OCAyLjU2LTQuOTE0IDMuNzQtOC4wNjggMy43NC0zLjc1MiAwLTcuOTAyLTIuNDkzLTguODY1LTcuOTg1aDIxLjM0OGwuMDY3LTEuMDc4LjA2Ni0xLjA3OHYtLjEwMWMuMDMzLTguODI3LTUuMzc4LTE1LjAyNi0xMy4xMTQtMTUuMDI2TTE2NS43MzggMTAuOTE1Yy0zLjk4NC0uMTY4LTcuNzM1IDEuNjg1LTEwLjM5MiA0Ljkydi00LjQ4MmgtNC44OHYyOC44MzloNC44OFYyOC4xNjVjMC04LjI4OCA1LjA0Ny0xMS45OTQgMTAuMDk0LTExLjk5NGgxLjQ2di01LjE4OGwtMS4xNjItLjA2OHpNMjUuNzY0IDMyLjY0NWMtMi41OSAyLjE5LTUuMTQ2IDMuMTY3LTguMyAzLjE2Ny03LjAwNiAwLTEyLjQ4NC02LjU3LTEyLjQ4NC0xNC45OTIgMC04LjQ5IDUuMzc5LTE0Ljg5IDEyLjQ4NC0xNC44OSAzLjAyMSAwIDUuNDc4LjkwOSA3Ljk2OCAyLjkzbC44My42NzQgMy42MTktMy42NzItLjk5Ni0uODQyQzI2LjgyNiAzLjI2OCAyMy40NC45NDMgMTcuNTMuOTQzIDcuNTM3Ljk0MyAwIDkuNTM0IDAgMjAuOTIxYzAgMTEuMzIgNy40NyAxOS44NzcgMTcuMzk3IDE5Ljg3NyA2LjA0MyAwIDkuNTYyLTIuNTk0IDExLjY4Ny00LjU0OGwuOTMtLjg0Mi0zLjM4Ny0zLjQzNi0uODYzLjY3M3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzg3ODc4IiBkPSJNMi45MjIgNDkuODZjMC0yLjE1NSAxLjU2LTMuOTA3IDMuODE4LTMuOTA3IDEuMzYxIDAgMi4xOTEuNDcyIDIuODg4IDEuMTc5bC0uODMuOTc3Yy0uNTk3LS41NzMtMS4yMjgtLjk0My0yLjA1OC0uOTQzLTEuMzk1IDAtMi40NTcgMS4xNzktMi40NTcgMi42NjF2LjAzNGMwIDEuNDgyIDEuMDMgMi42NjEgMi40NTcgMi42NjEuODk2IDAgMS40OTQtLjM3IDIuMTI1LS45NzdsLjgzLjg0MmMtLjc2NC44MDktMS42MjcgMS4zMTQtMi45ODggMS4zMTQtMi4xOTIuMDM0LTMuNzg1LTEuNjg0LTMuNzg1LTMuODRNMjAuNjg0IDQ5Ljg2YzAtMS40ODEtMS4wNjItMi42OTQtMi41MjMtMi42OTRzLTIuNDkgMS4xNzktMi40OSAyLjY2MXYuMDM0YzAgMS40NDkgMS4wNjIgMi42NjEgMi41MjMgMi42NjEgMS40NiAwIDIuNDktMS4xNzkgMi40OS0yLjY2MW0tNi4zNzQgMGMwLTIuMTIzIDEuNTkzLTMuOTA4IDMuODg0LTMuOTA4IDIuMjU4IDAgMy44NTEgMS43NTIgMy44NTEgMy44NzR2LjAzNGMwIDIuMTIyLTEuNTkzIDMuODc0LTMuODg0IDMuODc0LTIuMjU4IDAtMy44NTEtMS43NTItMy44NTEtMy44NzRNMjcuNDI0IDQ2LjA4OGgxLjM5NGwyLjI1OCAzLjUzNyAyLjI1OC0zLjUzN2gxLjM5NFY1My42aC0xLjI5NXYtNS4zOWwtMi4zMjQgMy41MzdoLS4wMzNsLTIuMzI0LTMuNTA0VjUzLjZoLTEuMjk1di03LjUxM3pNNDAuNDA1IDQ2LjA4OEg0MS44bDIuMjU3IDMuNTM3IDIuMjU4LTMuNTM3aDEuMzk0VjUzLjZoLTEuMjk0di01LjM5bC0yLjMyNCAzLjUzN2gtLjAzNGwtMi4zMjQtMy41MDRWNTMuNkg0MC40NHYtNy41MTN6TTUzLjI1NCA1MC40MzN2LTQuMzEyaDEuMjk1VjUwLjRjMCAxLjM4MS42OTcgMi4xMjIgMS44NiAyLjEyMiAxLjE2MSAwIDEuODU4LS43MDcgMS44NTgtMi4wODl2LTQuMzEyaDEuMjk1djQuMjQ1YzAgMi4yNTctMS4yNjEgMy4zNy0zLjE4NyAzLjM3LTEuODkyIDAtMy4xMi0xLjE0Ni0zLjEyLTMuMzAzTTY1LjE3MyA0Ni4wODhoMS4xOTVsMy45NTEgNS4xODh2LTUuMTg4aDEuMjk1VjUzLjZoLTEuMDk2bC00LjA4My01LjM1N1Y1My42SDY1LjE0di03LjUxM3oiLz4KICAgICAgICA8bWFzayBpZD0iZCIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHBhdGggZmlsbD0iIzc4Nzg3OCIgZD0iTTc3LjM5MSA1My42aDEuMjk1di03LjUxMkg3Ny4zOXpNODQuMTY0IDQ5Ljg2YzAtMi4xNTUgMS41Ni0zLjkwNyAzLjgxOC0zLjkwNyAxLjM2MiAwIDIuMTkyLjQ3MiAyLjg4OCAxLjE3OWwtLjgzLjk3N2MtLjU5Ny0uNTczLTEuMjI4LS45NDMtMi4wNTgtLjk0My0xLjM5NCAwLTIuNDU3IDEuMTc5LTIuNDU3IDIuNjYxdi4wMzRjMCAxLjQ4MiAxLjAzIDIuNjYxIDIuNDU3IDIuNjYxLjg5NiAwIDEuNDk0LS4zNyAyLjEyNS0uOTc3bC44My44NDJjLS43NjMuODA5LTEuNjI3IDEuMzE0LTIuOTg4IDEuMzE0LTIuMTkxLjAzNC0zLjc4NS0xLjY4NC0zLjc4NS0zLjg0TTEwMC41NjUgNTAuNjM2bC0xLjI5NS0yLjk5OS0xLjI2MSAyLjk5OWgyLjU1NnptLTEuODU5LTQuNTgyaDEuMTk1bDMuMjU0IDcuNTQ3aC0xLjM2MWwtLjc2NC0xLjgyaC0zLjQ4NmwtLjc2NCAxLjgyaC0xLjMyOGwzLjI1NC03LjU0N3pNMTA5LjA5OCA0Ny4zMzRoLTIuMzU4di0xLjIxM2g2LjAxdjEuMjEzaC0yLjM1OHY2LjNoLTEuMjk0ek0xMTguMDI5IDUzLjZoMS4yOTV2LTcuNTEyaC0xLjI5NXpNMTMxLjE0MyA0OS44NmMwLTEuNDgxLTEuMDYyLTIuNjk0LTIuNTIzLTIuNjk0cy0yLjQ5IDEuMTc5LTIuNDkgMi42NjF2LjAzNGMwIDEuNDQ5IDEuMDYyIDIuNjYxIDIuNTIzIDIuNjYxIDEuNDYgMCAyLjQ5LTEuMTc5IDIuNDktMi42NjFtLTYuMzc0IDBjMC0yLjEyMyAxLjU5My0zLjkwOCAzLjg4NC0zLjkwOCAyLjI1OCAwIDMuODUyIDEuNzUyIDMuODUyIDMuODc0di4wMzRjMCAyLjEyMi0xLjU5NCAzLjg3NC0zLjg4NSAzLjg3NC0yLjI1OCAwLTMuODUxLTEuNzUyLTMuODUxLTMuODc0TTEzNy44ODMgNDYuMDg4aDEuMTk1bDMuOTUxIDUuMTg4di01LjE4OGgxLjI5NVY1My42aC0xLjA5NmwtNC4wODMtNS4zNTdWNTMuNmgtMS4yOTV2LTcuNTEzek0xNDkuNTM2IDUyLjUyMmwuNzk3LS45NDNjLjY5Ny42MDYgMS40MjguOTc3IDIuMzI0Ljk3Ny43OTcgMCAxLjI5NS0uMzcgMS4yOTUtLjk0M3YtLjAzNGMwLS41MzktLjI5OS0uODQyLTEuNjYtMS4xNDUtMS41Ni0uMzcxLTIuNDU3LS44NDMtMi40NTctMi4yNTh2LS4wMzNjMC0xLjI4IDEuMDYzLTIuMTkgMi41MjMtMi4xOSAxLjA2MyAwIDEuOTI2LjMzNyAyLjY5Ljk0M2wtLjY5OCAxLjAxYy0uNjY0LS41MDUtMS4zMjgtLjc3NC0xLjk5Mi0uNzc0LS43NjMgMC0xLjE5NS40MDQtMS4xOTUuODc2di4wMzRjMCAuNTcyLjMzMi44NDIgMS43NiAxLjE3OSAxLjU2LjM3IDIuMzU3Ljk0MyAyLjM1NyAyLjE5di4wMzNjMCAxLjQxNS0xLjA5NiAyLjI1Ny0yLjY1NiAyLjI1Ny0xLjEyOSAwLTIuMTkxLS40MDQtMy4wODgtMS4xNzkiIG1hc2s9InVybCgjZCkiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt="Charter Communications logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Reward
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <RewardPoints />
    </div>
  );
}

export default App;
