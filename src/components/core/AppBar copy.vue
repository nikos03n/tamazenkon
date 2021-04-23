<template>
  <v-list id="11w1020" class="d-flex align-end flex-column">
    <ul >
      <li >
        <router-link to="/"><span1> </span1></router-link>
      </li>
    </ul>
    <ul id="navbar" class="padin">
      <li class="home1"><router-link to="/">Home</router-link></li>
      <li class="home2"><router-link to="/About">About Me</router-link></li>
      <li class="home4">
        <router-link to="/ConatctUs">Portfolio</router-link>
      </li>
    </ul>
  </v-list>
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
li {
  display: inline;
}
#w1020 {
  margin-right: auto;
  margin-left: auto;
  max-width: 1020px;
}

#navbar a {
  color: rgb(17, 10, 10);
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  padding-right: 40px;
}

.padin {
  font-size: 19px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-top: 6px;
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
  background: url("../core/outline_accessibility_black_24dp.png") no-repeat;
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
}

/* 768px - 992px */
@media screen and (max-width: 992px) {
}

@media screen and (max-width: 436px) {
  .padin {
    font-size: 13px;
  }
  .home1 {
    background-size: 20px;
    border: 20px;
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .home2 {
    background-size: 20px;
    border: 20px;
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .home3 {
    background-size: 20px;
  }
  .home4 {
    background-size: 20px;
    border: 20px;
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
} 
/* 320px - 576px */
@media screen and (max-width: 375px) {
  .padin {
    font-size: 13px;
  }
  .home1 {
    background-size: 20px;
    border: 20px;
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .home2 {
    background-size: 20px;
    border: 20px;
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .home3 {
    background-size: 20px;
  }
  .home4 {
    background-size: 20px;
    border: 20px;
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
}
/* @media screen and (max-width: 360px) {
  .padin {
    font-size: 13px;
  }
  .home1 {
    background-size: 18px;
    border: 18px;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .home2 {
    background-size: 18px;
    border: 18px;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .home3 {
    background-size: 18px;
  }
  .home4 {
    background-size: 18px;
    border: 18px;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
} */
@media screen and (max-width: 365px) {
  .padin {
    font-size: 10px;
  }
  .home1 {
    background-size: 18px;
    border: 18px;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .home2 {
    background-size: 18px;
    border: 18px;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .home3 {
    background-size: 18px;
  }
  .home4 {
    background-size: 18px;
    border: 18px;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
}
@media screen and (max-width: 319px) {
  .padin {
    font-size: 9px;
  }
  .home1 {
    background-size: 18px;
    border: 18px;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .home2 {
    background-size: 18px;
    border: 18px;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .home3 {
    background-size: 18px;
  }
  .home4 {
    background-size: 18px;
    border: 18px;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 10px;
  }
}
</style>
