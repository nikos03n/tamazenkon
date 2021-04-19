<template>
  <div class="container1">
    <ul id="navbar1">
      <li class="skill1">
        <router-link
          style="margin-top: 5px; padding-left: 0px; margin-right: 20px"
          to="/"
          ><span1> </span1
        ></router-link>
      </li>
    </ul>
    <ul id="navbar" class="padin">
      <li class="home1"><router-link to="/">Home</router-link></li>
      <li class="home2"><router-link to="/About">About Me</router-link></li>
      <!-- <li class="home3"><router-link to="/Servise">Services</router-link></li> -->
      <li class="home4">
        <router-link style="padding-right: 0px" class="padin11" to="/ConatctUs"
          >Portfolio</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.skill1 {
  padding-right: 200px;
}
li {
  display: inline;
}
li.skill {
  padding-top: 3px;
}
#navbar a {
  color: rgb(17, 10, 10);
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  padding-right: 40px;
}
.padin11 {
  padding-right: 0px;
}
#navbar1 a {
  color: #090213;
  text-decoration: none;
  display: inline-block;
  padding-left: 19px;
}
ul#navbar1 {
  padding-top: 20px;
  padding-left: 0px;
}
.skill {
  background: url("https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2FImage-1.jpg?alt=media&token=c74b8004-b703-4a0a-991a-12312c163ed6")
    no-repeat left top;
  font-size: 39px;
  padding-bottom: 16px;
  margin-top: 5px;
  padding-left: 3px;
}
span {
  padding-right: 20px;
  color: azure;
  font-size: 30px;
}
span1 {
  padding-top: 20px;
  font-size: 39px;
  /* position: absolute; */
  top: 65px;
  left: 75px;
}
.padin {
  font-size: 19px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-top: 6px;
}
.container1 {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
}

.home1 {
  background: url("../core/baseline_home_black_24dp (2).png") no-repeat;
  background-size: 30px;
  border: 20px;
  padding-left: 15px;
  padding-top: 7px;
  padding-bottom: 10px;
  color: #2e1f1f;
    font-family: -webkit-body;

}
.home2 {
  background: url("../core/outline_accessibility_black_24dp.png") no-repeat ;
  background-size: 30px;
  border: 20px;
  padding-left: 10px;
  padding-top: 6px;
  padding-bottom: 10px;

  color: #545454;
  font-family: -webkit-body;
}
.home3 {
  width: 350px;
  height: 100px;
  background: url("https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/foto-menu%2FShape%204.png?alt=media&token=6d034387-d82b-485d-a0ec-e377fba821a4")
    no-repeat left top;
  padding-left: 4px;
  color: #545454;
  font-family: -webkit-body;
}
.home4 {
  background: url("../core/outline_label_important_black_24dp.png") no-repeat;
  background-size: 25px;
  border: 20px;
  padding-left: 10px;
  padding-top: 2px;
  padding-bottom: 10px;
  color: #545454;
  font-family: -webkit-body;
}

/*Responsive*/

/* 992px - 1200px */
@media screen and (max-width: 1366px) {
  .container1 {
    max-width: 1020px;
  }
  .navbar1 {
    margin-right: 80px;
  }
  span1 {
    padding-right: 80px;
  }
}

/* 768px - 992px */
@media screen and (max-width: 992px) {
  span1 {
    padding-right: 0px;
  }
}

/* 576px - 768px */
@media screen and (max-width: 768px) {
  .container1 {
    flex-direction: column;
  }
  .skill1 {
    width: 100%;
    padding-right: 0px;
  }
}
/* 320px - 576px */
@media screen and (max-width: 576px) {
}
</style>
