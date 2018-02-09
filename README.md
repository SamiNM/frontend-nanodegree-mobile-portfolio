## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!
##### *Here are some of the Modifications in index.html*
To Optimize PageSpeed Insights score for index.html:
- Reduce critical resources By 
- Inline the CSS style file in index.html to reduce RoundTrip(request and response between client and server).
- Adding Async attribute into ```analytics.js``` and ```perfmatters.min.js```  



#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

##### *Here are some of the Modifications in views/js/main.js*
- Avoiding Forced Synchronous Layout
-- ``` document.querySelectorAll ``` Removed out of the loop and to improve the speed I used ```getElementsByClassName```: 
   ```
    function changePizzaSizes(size) {
      var randomPizzas = document.getElementsByClassName("randomPizzaContainer");
      var dx = determineDx(randomPizzas[0], size);
      var newwidth = (randomPizzas[0].offsetWidth + dx);
      for (var i = 0; i < randomPizzas.length; i++) {
        randomPizzas[i].style.width = newwidth + 'px';
        }
    }
   ```
-- Also ```document.getElementById``` Should be removed out of the loop:
   ```
    var randPizzas = document.getElementById("randomPizzas");
    for (var i = 2; i < 100; i++) {
      randPizzas.appendChild(pizzaElementGenerator(i));
    }
   ```
-- Assigning scrollTop outside the loop:
   ```
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    for (var i = 0; i < items.length; i++) {
       phase = Math.sin((scrollTop / 1250) + (i % 5));
       items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
      }
   ```
- This will request that your animation function be called before the browser performs the next repaint:
   ```
    window.addEventListener('scroll', function() {
    window.requestAnimationFrame(updatePositions);
    });
   ```



### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
