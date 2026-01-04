/*
Given an array of integers nums, return the number of good pairs. A pair(i, j) is called good if nums[i] == nums[j] and i < j.
*/

#include <bits/stdc++.h>
using namespace std;

#define fastio()                      \
    ios_base::sync_with_stdio(false); \
    cin.tie(NULL);                    \
    cout.tie(NULL)

int numIdenticalPairs(vector<int> &nums)
{
    // stores how many times each number (0–100) has appeared
    vector<int> freq(101, 0);
    // total number of good pairs
    int count = 0;
    // go through every number in the array
    for (int num : nums)
    {
        // add how many times this number was seen before
        count += freq[num];
        // now mark that we saw this number one more time
        freq[num]++;
    }
    // return the total pairs
    return count;
}

// Your code here
void Solve()
{
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
        cin >> nums[i];
}

// Driver code
int main()
{
    fastio();
    int t = 1;
    // cin >> t;
    while (t--)
        Solve();
    return 0;
}