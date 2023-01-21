CREATE TABLE responses (
  id Int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  session_id INT,
  email varchar(100),
  username varchar(100),
  pass varchar(100),
  addr1  varchar(100),
  addr2  varchar(100),
  city varchar(100),
  st varchar(100),
  zip INT,
  phone INT,
  cardNum varchar(100),
  exp INT,
  cvv INT,
  billZip INT
);


-- INSERT INTO responses
--  (session_id, email, username, pass, addr1, addr2, city, st, zip, phone, cardNum, exp, cvv, billZip)

--  VALUES (null, 10, "jerrodvarney@gmail.com", "jrod", "password", "address1", "address2", "city", "sf", 12345, 1234567890, 1234556765432, 1234, 233, 12342)