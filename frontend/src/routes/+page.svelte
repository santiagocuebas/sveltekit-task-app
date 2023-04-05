<div class="main-container">
  <div class="index-container">
    <h1>Favorite Links</h1>
    <i><h2>Store your favorite Website's Links</h2></i>
    <a href="/login">Login</a>
    <a href="/signup">Signup</a>
  </div>
</div>

<style>
  .main-container {
    background-image: url('/background.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .index-container {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
    margin-top: 12%;
    gap: 15px;
  }

  h1 {
    text-align: center;
    font-size: 80px;
    font-weight: 700;
    color: #ffffff;
  }

  h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: #ffffff;
  }

  a {
    width: 100px;
    margin: auto;
    padding: 8px 16px;
    border-radius: 6px;
    background-color: #3295d8;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
  }

  a:hover {
    background-color: #3295e8;
  }
</style>
