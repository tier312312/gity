import java.util.HashMap;

public class HashMapContainsKeyExample {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("apple", 10);
        map.put("banana", 20);
        map.put("orange", 30);
        String key = "banana";
        if (map.containsKey(key)) {
            System.out.println(key + " found with value: " + map.get(key));
        } else {
            System.out.println(key + " not found.");
        }
    }
}
