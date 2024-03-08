import java.security.SecureRandom;

public class RandomPasswordGenerator {
    // Method to generate a random password
    public static String generatePassword(int length) {
        // Characters to be used for generating the password
        String symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

        // Create a SecureRandom object for generating random numbers
        SecureRandom random = new SecureRandom();

        // Create a StringBuilder to store the password
        StringBuilder password = new StringBuilder();

        // Generate a random password of the specified length
        for (int i = 0; i < length; i++) {
            // Choose a random character from the symbols string
            int index = random.nextInt(symbols.length());
            // Append the chosen character to the password
            password.append(symbols.charAt(index));
        }

        return password.toString();
    }

    public static void main(String[] args) {
        // Length of the password
        int length = 12;

        // Generate the password
        String password = generatePassword(length);

        // Print the generated password
        System.out.println("Generated Password: " + password);
    }
}
