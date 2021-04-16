<template>
<div>
<div class="container-fluid">
			<div class="row">
              <header>
                  <nav role="navigation" class="navbar navbar-inverse">
                      <div class="container">
                          <!-- <div class="navbar-header">
                              <div class="container">
                                  <div class="row">
                                      <div class="col-lg-12">
                                          <h1><a href="#">КиноМонстр</a></h1>
                                          <p>Кино - наша страсть!</p>
                                      </div>
                                  </div>
                              </div>
                              <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                              <span class="sr-only">Toggle navigation</span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              </button>
                          </div> -->
                          <!-- <div id="navbarCollapse" class="collapse navbar-collapse navbar-right">
                              <ul class="nav nav-pills">
                                  <li class="active"> <a href="#">Главная</a> </li>
                                  <li> <a href="#">Фильмы</a> </li>
                                  <li> <a href="#">Сериалы</a> </li>
                                  <li> <a href="#">Рейтинг фильмов</a> </li>
                                  <li> <a href="#">Контакты</a> </li>
                              </ul>
                          </div> -->
                      </div>
                  </nav>
               </header>
			</div>
		</div>
</div>
</template>

<style scoped>
header {
  width: 100%;
  height: 100%;
  background: url(https://cdn.pixabay.com/photo/2019/03/11/09/53/car-4048220_960_720.jpg) center center no-repeat;
  background-size: cover;
}


header a, a:hover {
	color: #f0ad4e;
	text-decoration: none;
}

header h1 {
	letter-spacing: 15px;
	font-size: 300%;
}

header p {
	color: white !important;
	font-size: 90%;
	letter-spacing: 3px;
}

.navbar-inverse {
    padding: 5%;
    background: transparent;
    border-color: transparent;
}
</style>
