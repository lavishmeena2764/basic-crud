## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

# API Documentation

## Users

### Create a User

- **Method**: `POST`
- **URL**: `http://localhost:3000/users`
- **Body**:

```json
{
  "username": "testUser",
  "email": "test@123.com",
  "password_hash": "test123",
  "first_name": "test",
  "last_name": "user"
}
```
### Get all Users

- **Method**: `GET`
- **URL**: `http://localhost:3000/users`

### Get a User by ID

- **Method**: `GET`
- **URL**: `http://localhost:3000/users/1`

### Update a User

- **Method**: `PUT`
- **URL**: `http://localhost:3000/users/1`
- **Body**:

```json
{
  "username": "abc",
  "email": "abc@123.com",
  "first_name": "abc",
  "last_name": "def"
}
```

### Delete a User

- **Method**: `DELETE`
- **URL**: `http://localhost:3000/users/1`


## Wallet Addresses

### Create a Wallet Address

- **Method**: `POST`
- **URL**: `http://localhost:3000/wallet-addresses`
- **Body**:

```json
{
  "user_id": 1,
  "wallet_address": "0x1234567890abcdef",
  "wallet_type": "Ethereum"
}
```
### Get All Wallet Addresses

- **Method**: `GET`
- **URL**: `http://localhost:3000/wallet-addresses`

### Get a Wallet Address by ID

- **Method**: `GET`
- **URL**: `http://localhost:3000/wallet-addresses/1`

### Update a Wallet Address

- **Method**: `PUT`
- **URL**: `http://localhost:3000/wallet-addresses/1`
- **Body**:

```json
{
  "wallet_id": 1,
  "wallet_address": "0xabcdef1234567890",
  "wallet_type": "Bitcoin"
}
```

### Delete a Wallet Address

- **Method**: `DELETE`
- **URL**: `http://localhost:3000/wallet-addresses/1`

