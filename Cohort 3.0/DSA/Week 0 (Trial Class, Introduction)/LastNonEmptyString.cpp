/*
You are given a string containing lowercase English letters. You need to repeatedly perform the following operation until the string becomes empty:
In one operation, remove the first occurrence of every distinct character that currently exists in the string, going from left to right.After repeating this operation, the string will eventually become empty.Your task is to return the last non - empty value of the string.

Example :
Input : s = "ababcba" Process : ababcba → abba → ba → "" Output : "ba"
*/

#include <bits/stdc++.h>
using namespace std;

#define fastio()                      \
    ios_base::sync_with_stdio(false); \
    cin.tie(NULL);                    \
    cout.tie(NULL)

string lastNonEmptyString(string s)
{
    // count frequency of each character
    vector<int> freq(26, 0);
    for (char c : s)
        freq[c - 'a']++;

    // find maximum frequency
    int maxFreq = 0;
    for (int x : freq)
        maxFreq = max(maxFreq, x);

    string ans = "";

    // go from right to left
    for (int i = s.size() - 1; i >= 0; i--)
    {
        char c = s[i];
        // if this char still has max frequency
        if (freq[c - 'a'] == maxFreq)
        {
            ans.push_back(c);
            freq[c - 'a']--; // use one occurrence
        }
    }
    // reverse to restore correct order
    reverse(ans.begin(), ans.end());
    return ans;
}

// Your code here
void Solve()
{
    string s;
    cin >> s;
    cout << lastNonEmptyString(s);
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