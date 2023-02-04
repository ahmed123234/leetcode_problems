class Solution {
    public List<List<Integer>> mergeSimilarItems(int[][] items1, int[][] items2) {
        List <List<Integer>> res = new ArrayList<>();
        Map <Integer, Integer> m = new TreeMap<>();

        for( int [] item : items1) {
            int val = item[0];
            m.put(val, m.getOrDefault(val, 0) + item[1]);
        }


        for( int [] item : items2) {
            int val =item[0];
            m.put(val, m.getOrDefault(val, 0) + item[1]);
        }

        for(int key: m.keySet()) {
            List<Integer> l =new ArrayList<>();
            l.add(key);
            l.add(m.get(key));
            res.add(l);
        }
        return res;
    }
}
