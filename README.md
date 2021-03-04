<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Airbnb</title>
    <link href="css/style.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
<aside id="login-modal">
    <div class="modal">

        <img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/cross-24-512.png" alt="close" id="close">
        <h2>Log In</h2>
        <form action="">
            <input type="email" placeholder="email">
            <input type="password" placeholder="password">
            <input type="submit" value="Login" class="airbnb-btn">
        </form>
        <a href="">Sign Up</a>

    </div>
</aside>

    <header>

        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2522641/logo.png" alt="airbnb logo">
        <nav>
            <a href="">Sign Up</a>
            <a href="" id="login">Log In</a>
        </nav>

    </header>

    <main>
        <h1>Melbourne</h1>
        <p>From footy to fashion, the cultural capital of Australia dares to stay on the cutting edge.</p>
        <a href="" class="airbnb-btn">Find a neighborhood</a>
    </main>

    <section class="locals">
        <article>
            <h2>Local Love</h2>

            <div class="locals-desc">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2522641/heart.png">
                <p>Tourists mispronouncing Melbourne (it's mel-bin), crowded trains & trams, ticket inspectors, unpredictable weather, the price of real estate, Sydney</p>
            </div>
        </article>
        <article>
            
            <h2>Locals Complain About</h2>
            <div class="locals-desc">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2522641/chat.png">
            <p>Coffee, talking about coffee, brunch, footy in winter, cricket in summer, laneways & hidden bars, street art & buskers, debating which side of the river is better</p>
        </div>
        </article>

    </section>

    <section class="neighborhoods">
        <h2>Featured neighborhoods</h2>
        <h3>Explore 19 Melbourne neighborhoods, Which are right for you?</h3>

        <div class="three-neighborhoods">
            <div class="fitzroy hood">
                <h4>Fitzroy</h4>
                <p>Baristas, Beards, Bikes</p>
            </div>

            <div class="stkilda hood">
                <h4>St Kilda</h4>
                <p>Backpackers and packed send.</p>
            </div>

            <div class="cbd hood">
                <h4>CBD</h4>
                <p>Big Business, Little laneways</p>
            </div>
        </div>
        <a href="" class="airbnb-btn">Find a neighborhood</a>
    </section>

    <footer>
        <hr>
        <p>© Airbnb, Inc.</p>
    </footer>

<script src="js/index.js"></script>
</body>
</html>
