# Ecommerce App

This is an Ecommerce application that displays a list of products obtained from an API endpoint. It allows filtering products by category and price. It uses React context (`useContext`) to avoid unnecessary prop passing.

## Features

### Product List

- Displays a list of products obtained from the API endpoint.
- Each product is shown with its name, description, category, price, and an option to add it to the cart.
- Allows filtering products by category and price.

### Shopping Cart

- Allows adding products to the cart.
- Allows removing products from the cart.
- Allows modifying the quantity of products in the cart.
- Automatically synchronizes cart changes with the product list.
- Uses local storage (localStorage) to save the cart and retrieve it upon page reload.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `yarn install` to install the dependencies.

## Usage

1. Run `yarn start` to start the application.
2. Open your browser and visit `http://localhost:3000` to see the application in action.
3. Explore the product list and use the filters to find desired products.
4. Add products to the cart by clicking on the corresponding option on each product.
5. Go to the cart to view the added products, modify quantities, or remove products.
6. Cart changes will be saved automatically and synchronized with the product list.

## Contribution

Contributions are welcome. If you wish to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add a new feature'`).
4. Push your changes to the remote repository (`git push origin feature/new-feature`).
5. Open a pull request on GitHub.

## Author

- [Author's Name](https://github.com/andeveling): Brief description of the author.

## License

This project is licensed under the [License Name](https://license-url).

---

Thank you for using our Ecommerce application! If you have any questions or issues, feel free to contact us. We hope you enjoy the shopping experience.