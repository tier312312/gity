import java.util.ArrayList;
import java.util.Scanner;

public class FibonacciSequence {
    public static ArrayList<Integer> generateFibonacciSequence(int n) {
        // Initialize an ArrayList to store the Fibonacci sequence
        ArrayList<Integer> fibSequence = new ArrayList<>();
        fibSequence.add(0); // Add the first Fibonacci number (0) to the sequence
        fibSequence.add(1); // Add the second Fibonacci number (1) to the sequence

        // Generate Fibonacci sequence up to n terms
        while (fibSequence.size() < n) {
            int nextFib = fibSequence.get(fibSequence.size() - 1) + fibSequence.get(fibSequence.size() - 2);
            fibSequence.add(nextFib);
        }

        return fibSequence;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter the number of terms in the Fibonacci sequence
        System.out.print("Enter the number of terms in the Fibonacci sequence: ");
        int terms = scanner.nextInt();

        // Generate the Fibonacci sequence
        ArrayList<Integer> fibonacciSequence = generateFibonacciSequence(terms);

        // Print the generated Fibonacci sequence
        System.out.println("Fibonacci sequence up to " + terms + " terms:");
        for (int num : fibonacciSequence) {
            System.out.print(num + " ");
        }

        scanner.close();
    }
}
