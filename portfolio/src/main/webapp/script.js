// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
    const greetings =
        ['Im from NYC', 'I love chipotle', 'Im a cat person', 'I love 2048'];

    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = greeting;
}

/** Fetches the song lyrics from LyricsServlet and updates the page. */
async function showSongLyrics() {
    // Send a request to /lyrics.
    const responseFromServer = await fetch('/lyrics');

    //Parse the response as JSON.
    const lyricsArray = await responseFromServer.json();
    const oneLyric = lyricsArray[Math.floor(Math.random() * lyricsArray.length)];
    const lyricsContainer = document.getElementById('lyrics-container');
    lyricsContainer.innerText = oneLyric;
}
