1. What is the purpose of using sessions? 
    Sessions allow data to persist across server requests so credentials don’t need to be re-enter each time there is a new request to the server.

2. What does bcrypt do to help us store passwords in a secure manner?
    Bcrypt applies a hash algorithm to the password and allows the developer to choose the number of times the password is hashed. So the password is stored as a hashed string instead of the actual password. It also implements salting both manually and automatically.

3. What does bcrypt do to slow down attackers? 
    Since the password is hashed multiple, the attacker would have to know how many rounds the password was hashed and the hashing algorithm to gain access to the password information.
    
4. What are the three parts of the JSON Web Token?
    The three parts of JWT are:
        Header - contains the algorithm and token type
        Payload - contains claims (permissions for the user like user id)
        Signature - created by base64 encoding the header and payload then signed with a secret phrase.
