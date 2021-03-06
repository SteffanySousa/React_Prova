<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>Collective Admin Panel a Flat Bootstrap Responsive Website Template | Forms :: W3Layouts</title>

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <!-- Template CSS -->
  <link rel="stylesheet" href="assets/css/style.css">

</head>

<body class="sidebar-menu-collapsed">
  <!-- <div class="se-pre-con"></div> -->
  <section>
    <!-- sidebar menu start -->
    <div class="sidebar-menu sticky-sidebar-menu">

      <!-- logo start -->
      <div class="logo">
        <h1><a href="index.html">Collective</a></h1>
      </div>

      <!-- if logo is image enable this -->
      <!-- image logo --
    <div class="logo">
      <a href="index.html">
        <img src="image-path" alt="Your logo" title="Your logo" class="img-fluid" style="height:35px;" />
      </a>
    </div>-->
      <!-- //image logo -->

      <div class="logo-icon text-center">
        <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon"> </a>
      </div>
      <!-- //logo end -->

      <div class="sidebar-menu-inner">

        <!-- sidebar nav start -->
        <ul class="nav nav-pills nav-stacked custom-nav">
          <li><a href="index.html"><i class="fa fa-tachometer"></i><span> Dashboard</span></a>
          </li>
          <li><a href="cards.html"><i class="fa fa-cogs"></i> <span>Default cards</span></a></li>
          <li><a href="pricing.html"><i class="fa fa-table"></i> <span>Pricing tables</span></a></li>
          <li><a href="blocks.html"><i class="fa fa-th"></i> <span>Content blocks</span></a></li>
          <li><a href="forms.html"><i class="fa fa-file-text"></i> <span>Forms</span></a></li>
        </ul>
        <!-- //sidebar nav end -->
        <!-- toggle button start -->
        <a class="toggle-btn" onclick="toggleMenu()">
          <i class="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
          <i class="fa fa-angle-double-right menu-collapsed__right"></i>
        </a>
        <!-- //toggle button end -->
      </div>
    </div>
    <!-- //sidebar menu end -->
    <!-- header-starts -->
    <div class="header sticky-header">

      <!-- notification menu start -->
      <div class="menu-right">
        <div class="navbar user-panel-top">
          <div class="search-box">
            <form action="#search-results.html" method="get">
              <input class="search-input" placeholder="Search Here..." type="search" id="search">
              <button class="search-submit" value=""><span class="fa fa-search"></span></button>
            </form>
          </div>
          <div class="profile_details">
            <ul>
              <li class="dropdown profile_details_drop">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false">
                  <div class="profile_img">
                    <img src="assets/images/profileimg.jpg" class="rounded-circle" alt="" />
                    <div class="user-active">
                      <span></span>
                    </div>
                  </div>
                </a>
                <ul class="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                  <li class="user-info">
                    <h5 class="user-name">John Deo</h5>
                    <span class="status ml-2">Available</span>
                  </li>
                  <li> <a href="#"><i class="lnr lnr-user"></i>My Profile</a> </li>
                  <li> <a href="#"><i class="lnr lnr-users"></i>1k Followers</a> </li>
                  <li> <a href="#"><i class="lnr lnr-cog"></i>Setting</a> </li>
                  <li> <a href="#"><i class="lnr lnr-heart"></i>100 Likes</a> </li>
                  <li class="logout"> <a href="#sign-up.html"><i class="fa fa-power-off"></i> Logout</a> </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--notification menu end -->
    </div>
    <!-- //header-ends -->
    <!-- main content start -->
    <div class="main-content">

      <!-- content -->
      <div class="container-fluid content-top-gap">

        <!-- breadcrumbs -->
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb my-breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Forms</li>
          </ol>
        </nav>
        <!-- //breadcrumbs -->
        <!-- forms -->
        <section class="forms">
          <!-- forms 1 -->
          <div class="card card_border py-2 mb-4">
            <div class="cards__heading">
              <h3>Forms <span></span></h3>
            </div>
            <div class="card-body">
              <form action="#" method="post">
                <div class="form-group">
                  <label for="exampleInputEmail1" class="input__label">Email address</label>
                  <input type="email" class="form-control input-style" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                    anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" class="input__label">Password</label>
                  <input type="password" class="form-control input-style" id="exampleInputPassword1"
                    placeholder="Password">
                </div>
                <div class="form-check check-remember check-me-out">
                  <input type="checkbox" class="form-check-input checkbox" id="exampleCheck1">
                  <label class="form-check-label checkmark" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary btn-style mt-4">Submit</button>
              </form>
            </div>
          </div>
          <!-- //forms 1 -->

          <!-- forms 2 -->
          <div class="card card_border py-2 mb-4">
            <div class="card-body">
              <form action="#" method="post">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4" class="input__label">Email</label>
                    <input type="email" class="form-control input-style" id="inputEmail4" placeholder="Email">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4" class="input__label">Password</label>
                    <input type="password" class="form-control input-style" id="inputPassword4" placeholder="Password">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress" class="input__label">Address</label>
                  <input type="text" class="form-control input-style" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="form-group">
                  <label for="inputAddress2" class="input__label">Address 2</label>
                  <input type="text" class="form-control input-style" id="inputAddress2"
                    placeholder="Apartment, studio, or floor">
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity" class="input__label">City</label>
                    <input type="text" class="form-control input-style" id="inputCity">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState" class="input__label">State</label>
                    <select id="inputState" class="form-control input-style">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputZip" class="input__label">Zip</label>
                    <input type="text" class="form-control input-style" id="inputZip">
                  </div>
                </div>
                <div class="form-check check-remember check-me-out">
                  <input class="form-check-input checkbox" type="checkbox" id="gridCheck">
                  <label class="form-check-label checkmark" for="gridCheck">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary btn-style mt-4">Sign in</button>
              </form>
            </div>
          </div>
          <!-- //forms 2 -->



        </section>
        <!-- //forms -->
  </section>
  <!-- //forms  -->

  </div>
  <!-- //content -->

  </div>
  <!-- main content end-->
  </section>
  <!--footer section start-->
  <footer class="dashboard">
    <p>&copy 2020 Collective. All Rights Reserved | Design by <a href="https://w3layouts.com/" target="_blank"
        class="text-primary">W3layouts.</a></p>
  </footer>
  <!--footer section end-->

  <!--abrir e fechar o menu-->
  <script>
    function toggleMenu() {
      let body = document.querySelector("body");
      let hasCollapsed = body.classList.contains("sidebar-menu-collapsed");
      if(hasCollapsed) {
       body.classList.remove("sidebar-menu-collapsed");
       body.classList.add("noscroll");
      } else {
        body.classList.remove("noscroll");
        body.classList.add("sidebar-menu-collapsed");
      };
    }
    
  </script>

</body>

</html>