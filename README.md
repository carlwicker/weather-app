# Weather App

LIVE VERSION: https://weather-app-gamma-two-45.vercel.app

![image 1](https://github.com/echo724/notion2md/assets/78376735/6b880ad1-3ff2-4cdd-8d06-ff708314772d)

### Objective

Using a NX monorepo, TypeScript, React and Next.js your task is to build a Weather App. ✔️

### Brief

In England, we love talking about the weather. To help people have informed conversations about the weather; your assignment is to use data from the [Visual Crossing Weather API](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/) and display it so it looks like [this design document](https://www.figma.com/file/FNdVsOUJA53CWMW9mnraYk/Weather-App?type=design&node-id=0%3A1&t=FPsFSmGIgDaH48F6-1). It doesn't have to be pixel pefect- but should maintain functional and operational integrity when used on different types of devices with different screen resolutions. ✔️

### Tasks

Fork this branch and then design, organise, test, lint and document your code using the scenario of it being deployed to production and be used by a user base of approx. 5,000 daily active users. ✔️

You have complete freedom over how and how long you want to spend to deliver the following requirements:

- The app can be accessed through a public URL. ✔️
- On first load, the app should show the weather for a specific place. ✔️
- Users can see accurate and relevant weather information based on their search. ✔️
- Users are able to see relevant information displayed in different metrics. ✔️
- Users are notified if there is no information returned from their search. ✔️

### Development

The NX monorepo handles tasks relating to your codebase. A few useful commands are:

- Run development server `npx nx run weather-app:dev`
- Run build `npx nx weather-app:build`
- Run tests `npx nx weather-app:test`

More info on working with Next.js in NX can be found [here](https://nx.dev/packages/next#setting-up-next.js).

### Implementation Details

Please include some information that considers certain areas for future improvement such as:

- Architectural choices. ✔️
- Data sanitisation & validation. ✔️
- Accessibility. ✔️
- Potential performance bottle necks and optimisations ✔️
- High fault tolerance.

### Notes From Developer

- Fun project to work on with some interesting challanges.
- Forking the original repository is disabled.
- Used TailwindCSS to speed up development time.
- Fully responsive layout.
- Made reusable layout componets - Boxes & Progress Bars.
- Created utility to deal with Epochs and Coverting to Celsius.
- Used Flexbox throughout for ease of switch flex-row / flex-col for responsive components.
- Disabled main panel components until data is loaded.
- Disabled input of numbers in the search bar and more than one concurrent space.
- Disabled form submission if the input is blank.
- The typeface resembles Comic Sans (eg inputting "sidney").
- Figma file has some issues - "Max Temp." box is shown twice & rouge white line under "Cloud Cover" progress bar.
- Figma file weather icons need some work to match the API. [Weather API Icon docs](https://www.visualcrossing.com/resources/documentation/weather-api/defining-icon-set-in-the-weather-api/)
- Figma file doenst always display correct font size data. Not sure what's causing this issue.
- I noticed the API key was exposed in the console when an error occurs when fetching data from useEffect directly in the page. To resolve this i used NextJS API routing functionality.
- Used ARC toolkit to check accessibility and made fixes.
- Added error message for users if the location cannot be found.
- Weather API requires a subscription to achieve 5000+ request a day, free version limited to 1000 requests per day.

LIVE VERSION: https://weather-app-gamma-two-45.vercel.app
