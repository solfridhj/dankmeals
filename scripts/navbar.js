
// Function to update for files within recipe directory
function recipe(){
    document.write(`

    <!-- NAVBAR -->

    <!-- Section for large navbar -->
    <div id="header">
                    <div id="header-nav">
                    <ul class="navbar">
                        <li class="navbar-page">
                            <div id="logo">
                                <a class="link" href="../../index.html">DankMeals</a>
                            </div>
                        </li>
                        <li class="navbar-page dropdown">
                            <div class="on-hover">
                            <a class="link" href="../recipe.html">Recipes</a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item">
                                    <a class="dropdown-link" href="../everyday.html">Everyday</a>
        
                                </li>
                                <li class="dropdown-item">
                                    <a class="dropdown-link" href="../party.html">Party</a>
        
                                </li>
                                <li class="dropdown-item">
                                    <a class="dropdown-link" href="../relax.html">Chill</a>
        
                                </li>
                            </ul>
                            </div>
                        </li>
        
                        <li class="navbar-page">
                            <a class="link" href="../../try_your_luck_meal.html">Try-your-luck</a>
                        </li>
        
                        <li class="navbar-page">
                            <a class="link"href="../../about.html">About</a>
                        </li>
        
                        <li class="navbar-page">
                            <a class="link" href="../../contact.html">Contact</a>
                            
                        </li>
                        <li class="navbar-page">
                            
                            <form action="../../search.html" method="POST">
                                
                                <label for="search-bar">
                                    <input type="search" id="search-bar" placeholder="Search for food" required>
                                </label>
                            </form>
                        
                        </li>
        
                    </ul>
                    
                </div>
                </div>
                <!--End large navbar-->
        
                <!-- Header for small screens -->
                <div id="small-header">
                    <div id="logo">
                        <a id="logo"class="link" href="../../index.html">DankMeals</a>
                    </div>
        
                    <div id="small-on-hover">
        
                            <img id="to-hov" src="../../menu.png" width="40px" height="40px">
        
                        <ul id="small-dropdown">
        
                            <li>
                                <a href="../recipe.html">Recipes</a>
                            </li>
        
                            <li id="under">
                                <a href="../everyday.html">Everyday</a>
                            </li>
        
                            <li id="under">
                                <a href="../party.html">Party</a>
                            </li>
        
                            <li id="under">
                                <a href="../relax.html">Relax</a>
                            </li>
        
                            <li>
                                <a href="../../try_your_luck_meal.html">Try-your-luck</a>
                            </li>
        
                            <li>
                                <a href="../../about.html">About</a>
                            </li>
        
                            <li>
                                <a href="../../contact.html">Contact</a>
                            </li>
                            <li>

                                <form action="../../search.html" method="POST">
                                    
                                    <label for="small-search-bar">
                                        <input type="search" id="small-search-bar" placeholder="Search for food" autocomplete="off" required>
                                    </label>
                                </form>
                    
                            </li>
                        </ul>
                    
        
                    </div>
                </div>
                <!-- End of header for small screens -->
        
                <!-- END OF NAVBAR SECTION-->




    `)
}

// Function to update whithin recipe_repository directory 
function recipe_rep(){
    document.write(
        `
        <!-- NAVBAR SECTION -->

        <!-- Large navbar-->
        <div id="header">
                <div id="header-nav">
                <ul class="navbar">
                    <li class="navbar-page">
                        <div id="logo">
                            <a class="link" href="../index.html">DankMeals</a>
                        </div>
                    </li>
                    <li class="navbar-page dropdown">
                        <div class="on-hover">
                        <a class="link" href="recipe.html">Recipes</a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">
                                <a class="dropdown-link" href="everyday.html">Everyday</a>
    
                            </li>
                            <li class="dropdown-item">
                                <a class="dropdown-link" href="party.html">Party</a>
    
                            </li>
                            <li class="dropdown-item">
                                <a class="dropdown-link" href="relax.html">Chill</a>
    
                            </li>
                        </ul>
                        </div>
                    </li>
    
                    <li class="navbar-page">
                        <a class="link" href="../try_your_luck_meal.html">Try-your-luck</a>
                    </li>
    
                    <li class="navbar-page">
                        <a class="link"href="../about.html">About</a>
                    </li>
    
                    <li class="navbar-page">
                        <a class="link" href="../contact.html">Contact</a>
                        
                    </li>
                    <li class="navbar-page">
                        
                        <form action="../search.html" method="POST">
                            
                            <label for="search-bar">
                                <input type="search" id="search-bar" placeholder="Search for food" required>
                            </label>
                        </form>
                    
                    </li>
    
                </ul>
                
            </div>
            </div>
            <!--End large navbar-->
    
            <!-- Header for small screens -->
            <div id="small-header">
                <div id="logo">
                    <a id="logo"class="link" href="../index.html">DankMeals</a>
                </div>
    
                <div id="small-on-hover">
    
                        <img id="to-hov" src="../menu.png" width="40px" height="40px">
    
                    <ul id="small-dropdown">
    
                        <li>
                            <a href="recipe.html">Recipes</a>
                        </li>
    
                        <li id="under">
                            <a href="everyday.html">Everyday</a>
                        </li>
    
                        <li id="under">
                            <a href="party.html">Party</a>
                        </li>
    
                        <li id="under">
                            <a href="relax.html">Relax</a>
                        </li>
    
                        <li>
                            <a href="../try_your_luck_meal.html">Try-your-luck</a>
                        </li>
    
                        <li>
                            <a href="../about.html">About</a>
                        </li>
    
                        <li>
                            <a href="../contact.html">Contact</a>
                        </li>
                        <li>

                    <form action="../search.html" method="POST">
                        
                        <label for="small-search-bar">
                            <input type="search" id="small-search-bar" placeholder="Search for food" autocomplete="off" required>
                        </label>
                    </form>
                    
                </li>
                    </ul>
                
    
                </div>
            </div>
            <!-- End of header for small screens -->
    
            <!-- END OF NAVBAR SECTION-->
        `
    )
}

// Function to update for pages not in directory (rel. index file)
function no_dir() {
    document.write(`

    <!-- NAVBAR SECTION -->

    <!-- Large navbar-->
    <div id="header">
        <div id="header-nav">
        <ul class="navbar">
            <li class="navbar-page">
                <div id="logo">
                    <a class="link" href="index.html">DankMeals</a>
                </div>
            </li>
            <li class="navbar-page dropdown">
                <div class="on-hover">
                <a class="link" href="recipe_repository/recipe.html">Recipes</a>
                <ul class="dropdown-menu">
                    <li class="dropdown-item">
                        <a class="dropdown-link" href="recipe_repository/everyday.html">Everyday</a>

                    </li>
                    <li class="dropdown-item">
                        <a class="dropdown-link" href="recipe_repository/party.html">Party</a>

                    </li>
                    <li class="dropdown-item">
                        <a class="dropdown-link" href="recipe_repository/relax.html">Chill</a>

                    </li>
                </ul>
                </div>
            </li>

            <li class="navbar-page">
                <a class="link" href="try_your_luck_meal.html">Try-your-luck</a>
            </li>

            <li class="navbar-page">
                <a class="link"href="about.html">About</a>
            </li>

            <li class="navbar-page">
                <a class="link" href="contact.html">Contact</a>
                
            </li>
            <li class="navbar-page">
                
                <form action="search.html" method="POST">
                    
                    <label for="search-bar">
                        <input type="search" id="search-bar" placeholder="Search for food" required>
                    </label>
                </form>
            
            </li>

        </ul>
        
    </div>
    </div>
    <!--End large navbar-->

    <!-- Header for small screens -->
    <div id="small-header">
        <div id="logo">
            <a id="logo"class="link" href="index.html">DankMeals</a>
        </div>

        <div id="small-on-hover">

                <img id="to-hov" src="menu.png" width="40px" height="40px">

            <ul id="small-dropdown">

                <li>
                    <a href="recipe_repository/recipe.html">Recipes</a>
                </li>

                <li id="under">
                    <a href="recipe_repository/everyday.html">Everyday</a>
                </li>

                <li id="under">
                    <a href="recipe_repository/party.html">Party</a>
                </li>

                <li id="under">
                    <a href="recipe_repository/relax.html">Relax</a>
                </li>

                <li>
                    <a href="try_your_luck_meal.html">Try-your-luck</a>
                </li>

                <li>
                    <a href="about.html">About</a>
                </li>

                <li>
                    <a href="contact.html">Contact</a>
                </li>

                <li>

                <form action="search.html" method="POST">
                    
                    <label for="small-search-bar">
                        <input type="search" id="small-search-bar" placeholder="Search for food" autocomplete="off" required>
                    </label>
                </form>
                    
                </li>
            </ul>
        

        </div>
    </div>
    <!-- End of header for small screens -->

    <!-- END OF NAVBAR SECTION-->
    `)
}
