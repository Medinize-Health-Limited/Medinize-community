<template>
  <div class="splash-screen">
    <div class="spinner-wrapper">
      <div class="spinner flex justify-center items-center">
        <img src="@/assets/img/logo.png" class="h-[600px] w-[900px]" alt="logo">
      </div>
    </div>
  </div>
</template>

<style scoped>
.splash-screen {
  background: #E6EDFE;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 50;
}

.spinner-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
}

.spinner {
  width: 500px;
  height: 500px;
  margin: 100px auto;
  background-color: white;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 3s infinite ease-in-out;
  animation: sk-scaleout 3s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }

  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}</style>
