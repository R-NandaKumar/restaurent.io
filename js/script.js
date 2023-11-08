// Spinner
var preloader = document.getElementById("loading");
function myFunction() {
  preloader.style.display = "none";
}

$(document).ready(function () {
  // Form submission handling
  $("#contactForm").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // Custom form submission logic
    // Here, you can perform actions like sending an email or saving the data to a database
    // Replace the following code with your own logic

    // Simulating a successful form submission
    if (name && email && message) {
      // Perform your actions here
      // For example, sending an email
      sendEmail(name, email, message);

      // Display a success message
      showAlert("success", "Form submitted successfully!");

      // Reset the form fields
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
    } else {
      // Display an error message if any of the fields are empty
      showAlert("error", "Please fill in all the required fields.");
    }
  });

  // Fetch menu items dynamically
  fetchMenuItems();
});

function fetchMenuItems() {
  // Simulating an API call to fetch menu items
  setTimeout(function () {
    var menuItems = [
      {
        title: "Dish 1",
        image: "assets/dish1.jpg",
        description: "Idlis are round cakes made from a batter of steamed rice and fermented black lentil..",
      },
      {
        title: "Dish 2",
        image: "assets/dish2.jpg",
        description:
          "Vada is a savoury, fried snack. To many, it may look like a fried version of doughnuts..",
      },
      {
        title: "Dish 3",
        image: "assets/dish3.jpg",
        description:
          "guliyappa recipe | paddu recipe | easy paddu recipe with detailed photo recipe. paddu is a easy south indian breakfast recipe prepared from left over dosa batter.",
      },
      {
        title: "Dish 4",
        image: "assets/dish4.jpg",
        description:
          "The staple food of Kerala is greatly influenced by the history and culture of the state. It’s a blend of both vegetarian and non-vegetarian options.",
      },
      {
        title: "Dish 5",
        image: "assets/dish5.jpg",
        description:
          "Curd rice aids digestion and provides relief from stomach and digestive problems. Curd rice is a meal that can help you relax and unwind. .",
      },
      {
        title: "Dish 6",
        image: "assets/dish6.jpeg",
        description: "Masala dosa is a roasted dosa served with potato curry, chutney and sambar, while saada (plain) dosa is prepared with a lighter texture;.",
      },
      {
        title: "Dish 7",
        image: "assets/dish7.png",
        description:
          " Thali recommended to have the combination of rasam, sambar, sabzi or palya, dessert and a salad. the thali can also be extended further by adding snacks like medu vada, mirchi bajji or even vegetable bonda or some deep fried poori"
      },
      {
        title: "Dish 8",
        image: "assets/dish8.jpg",
        description:
          "Rich in flavour and spices, a traditional Maharastrian thali consists of kothimbir vadi (coriander fritters), bhakri roti (millet flatbread), pitla (chickpea flour curry), bhajis, like vangyache bharit .",
      },
      {
        title: "Dish 9",
        image: "assets/dish9.jpg",
        description:
          "Non-vegetarian food (in Indian English sometimes shortened to non-veg food) contains meat (red meat, poultry, seafood, or the flesh of any other animal), and sometimes, eggs.",
      },
      {
        title: "Dish 10",
        image: "assets/dish10.jpg",
        description:
          "Poori or Puri is a traditional Indian fried bread that is delicious to enjoy with almost any main dish. It's a simple unleavened bread made from just whole wheat flour, salt, and water..",
      },
      {
        title: "Dish 11",
        image: "assets/dish11.jpg",
        description:
          "Mangalore buns are sweet fried bread made with mashed bananas, flour, sugar and spiced with a touch of ground cumin.",
      },
      {
        title: "Dish 12",
        image: "assets/dish12.jpg",
        description: "Meals that come with two flaky rotis at the centre of the plate. Around it come spicy chutneys, dals, and thick gravies that go superbly with the light rotis. It’s a celebration of rustic Karnataka flavours.",
      },
      // Add more menu items here
    ];

    var menuItemsHTML = "";
    var carouselIndicatorsHTML = "";
    var itemsPerPage = 3; // Number of menu items to display per page
    var pageCount = Math.ceil(menuItems.length / itemsPerPage);

    for (var i = 0; i < pageCount; i++) {
      var startIndex = i * itemsPerPage;
      var endIndex = (i + 1) * itemsPerPage;
      var menuItemsPage = menuItems.slice(startIndex, endIndex);

      var carouselItemClass =
        i === 0 ? "carousel-item active" : "carousel-item";
      var carouselIndicatorClass = i === 0 ? "active" : "";

      menuItemsHTML +=
        '<div class="' + carouselItemClass + '">' + '<div class="card-deck">';

      menuItemsPage.forEach(function (item) {
        menuItemsHTML +=
          '<div class="card">' +
          '<img src="' +
          item.image +
          '" class="card-img-top" alt="' +
          item.title +
          '">' +
          '<div class="card-body">' +
          '<h5 class="card-title">' +
          item.title +
          "</h5>" +
          '<p class="card-text">' +
          item.description +
          "</p>" +
          "</div>" +
          "</div>";
      });

      menuItemsHTML += "</div></div>";

      carouselIndicatorsHTML +=
        '<li data-target="#menuCarousel" data-slide-to="' +
        i +
        '" class="' +
        carouselIndicatorClass +
        '"></li>';
    }

    $("#menu .carousel-indicators").html(carouselIndicatorsHTML);
    $("#menu .carousel-inner").html(menuItemsHTML);

    // Initialize the carousel
    $(".carousel").carousel();
  }, 1000);
}

function sendEmail(name, email, message) {
  // Custom code to send email
  // Replace this with your own email sending logic
  console.log("Sending email to: " + email);
  console.log("Message: " + message);
}

function showAlert(type, message) {
  // Display an alert message with the given type (success, error)
  // You can customize this as per your needs
  var alertClass = type === "success" ? "alert-success" : "alert-danger";
  var alertHTML =
    '<div class="alert ' +
    alertClass +
    ' alert-dismissible fade show" role="alert">' +
    message +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
    '<span aria-hidden="true">&times;</span>' +
    "</button>" +
    "</div>";

  $("#alertContainer").html(alertHTML);
}
