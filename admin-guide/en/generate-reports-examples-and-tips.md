# Generate Reports - Examples and Tips

This section was originally authored by Andrea Kosavic at York University Library, and has been slightly revised \(mostly with OJS 3 updates\).

The Report Generator can be found in OJS 2 at Home &gt; User &gt; Journal Management &gt; Stats & Reports &gt; Generate Custom Report

The Report Generator can be found in OJS 3 at Dashboard &gt; Tools &gt; Statistics &gt; Generate Custom Report

## **A few tips for using the Report Generator**

* Note that the current day’s data will not be available until the next day
* The generator works like a funnel for data. The trick is to narrow down the bigger elements \(such as date range\), select what you’re interested in from there \(issues, articles, etc.\) then tweak the data at the end \(i.e. sort by number of downloads\).
* The Report Generator is most useful if you use the Advanced Options. All the examples below make use of the advanced options.
* The Report Generator spits out a URL at the very bottom that allows you to re-run your query at any time! Make sure to copy and save the URL somewhere so that you can re-run your search later \(it will disappear once the page is reloaded\).
* This section in the simple search... 

  ![](https://lh3.googleusercontent.com/zZgY3vgUHtOhTkLnfTsXOjWit7hn3dOkv14m0eCa7mz1oYb04KeV68mIJ4RC7TzDlA1l0nRrOQtyMr_VOzLlEDe0qEDqNtYweS9LgW5kbFeSJVskOJQGY6L7C1QMa617BTeXNkKi)

  ...is actually repeated in the “Columns” section below...along with a number of other options. \(Visible in the advanced options.\)  


  ![](https://lh4.googleusercontent.com/ZGkhfw8uSwd9Ovktc4GpTmHQIBnOg68tzRt6cBdLrelT3JMNrs4rskSw9Ezi4L_n42jeDRJ-WdpCgobnAamGH4fZUwrGU03wHCK2nd_-y6OGxJ1ihT8mfK2gLpYr1WcZ10uMLUNp)

## **Example report: How well has a particular \(i.e. most recent\) issue performed over the last few months?**

This particular query will give you a monthly count of how many full text galleys have been downloaded from a particular issue. You’ll have a column for month and total count for month, and a separate row for every month.

* Under “Default report templates” select “Article file downloads” from the dropdown list
* Uncheck all boxes in the “Aggregate stats by”
* Click on the “Month” radio button and enter date range under “Or select range by”

![](https://lh4.googleusercontent.com/x_CTGtrDYmxR_U5U9DQGu0RQ5JXxILPH7AJgmPwOag0Q7N5C2FEoWBlKcklp4Wdxm07NE7kxa3VzT6d3pg-kP3Bf5yKEpc9Jg-UBTz2BqKeOVIIe5X01Q-efifC518d7dEj9-qLZ)

* Select only “Month” under Columns

![](https://lh5.googleusercontent.com/UhAJbSjqNzSJpEOFoh0ySLvWbIOaJXUcr-3XMViX5d4Ul6iaHdjvM_WZvaPmFcK-4TjAhPIxVnzn76tD3lXCHn6UmdHKfO3ixLl54Th1W4ISE_e9yqFTxKCZvwMFLT7FeOwWOsjo)

* We want only a very light filtering of our data. Select the issue that you’re interested in, for example “Vol 6 \(2004\)” here. We also want to select only “Galley” under “By object type”

![](https://lh5.googleusercontent.com/yWzDH3FA568s_zjORIGNOmcbsaOqXy5qKUkWCVtUGrpveiENZxpYlnojJQlq4UJII9vRJ725NdsA0Ray0SNg9Ums50eKDEH8A3MFOdGCQ3TmM2WZuveridRbjzFRK-srsI4mi6zF)

* Ignore the “By geo location” and “Order by” options, and click “Generate custom report”
* You’ll end up with a very simple monthly report of the galley downloads for the one issue of interest for your journal.

![](https://lh3.googleusercontent.com/kJo1sgCOaiW1TzaSfEp-5QzE5J3tSizDUfenECMpOIK1LiCN5AV35tCiceFhUgXdv0JsgUUN25L9BfvRtt0TxyCIctLebk_KXtL76IelBE89YQtXq0wQ8LTydN6DnFgtCGuHjAZ8)

Save the URL at the bottom of the page for your records!

## **Example report: What are the most downloaded articles over the last 5 years?**

This report will present a list of article titles \(and the issues they come from\) ordered by descending download counts.

* Select “Article file downloads” from the dropdown box.
* Uncheck all boxes under “Aggregate stats by”
* Select the “Month” radio button and enter a date range

![](https://lh4.googleusercontent.com/x_CTGtrDYmxR_U5U9DQGu0RQ5JXxILPH7AJgmPwOag0Q7N5C2FEoWBlKcklp4Wdxm07NE7kxa3VzT6d3pg-kP3Bf5yKEpc9Jg-UBTz2BqKeOVIIe5X01Q-efifC518d7dEj9-qLZ)

* Select only “Article” and “Issue” under Columns. We’ll be narrowing down the type at a later point in the query.

![](https://lh5.googleusercontent.com/lcw5NI5S3aTPRJpoA0GkrumGDnRrKcr-caDZRXcp4_fW33-kTffPN9btRPuG32sau7zKAAX7GW0Ds1t8sYqrEbEnisyXWn8pQWgAYWYrdI3G9ejDoO5WTJ3mwqol4Gy6hkLqsXv7)

* Ignore the “By context” area, but select “Galley” under “by object type”. This will ensure that you’re looking at all possible article downloads \(for all galley types\).

![](https://lh5.googleusercontent.com/6E5xYiT0ajIZsQVJbsxR0k9OOZUSoH-KMweOliR9PCGDKXfv9TkiRaqzedLcG5W8VvIqVYncrYBQmou3yZx3GjyPwjFGNs9FGTwKmlWRIBmCl31UJa5qdscAkzF-7aja-FEnj_an)

* Ignore “geo location” \(not shown here\)
* “Order by” will arrange your articles in descending order by number of downloads. To achieve this, select “Count” in the first drop down box, and the select “Descending."

![](https://lh5.googleusercontent.com/RCJkSf9IQuEaZkyCWTtYQTNcwe-OQdjkCy_KtE43C6UD6nlG5Z5eWvdZ0wX2P4D_V7UKeR5jpRmTuSID2lzBUQVjRI8NeRg4xgtbbrJquSR51wqimAqPePXKo-7HK57DycrBjU8H)

* The resulting report will appear as follows \(truncated\):

![](https://lh3.googleusercontent.com/AwRJrT9mRQemnW0F4O-y4W3V9-z_VA0HFEFK4hjqEM5nHadHemeB9yKRoVGKTPVkpgQUq-z0qwMveMHzjfFGiNwk2tHc36bMZqdnf7rW-P_4hm_3QMisqBqeZcMwwB6BFABbmVJY)

* Save your URL at the bottom of the page!

## **Example: What’s our most popular issue?**

This query displays a count of fulltext downloads for each journal issue and orders the results from highest to lowest.

* Select “Article file downloads” from the dropdown box.
* Uncheck all boxes under “Aggregate stats by”
* Select the “Month” radio button and enter a date range

![](https://lh4.googleusercontent.com/VF0ze4t7M2xgB5V_DGrGIfqO3aLE_N3etLxSxrYWGUPdVQNLSRMNqlObsXZ8DPBN_ygkqOGkh_6WWGvj4GBxNsepYzr8-hotDFNuocMXU0TPMDESMweOABbnQUJm6to23Q-er1YJ)

* Under columns, click on “Issue”

![](https://lh3.googleusercontent.com/qDh2QsUsE8gzJJ7W0BLule0VbKI4MmiYfKWhRqbsQwbmG24au47Ax_cdL1PUfP9HS_0CWNbRrXgBj-nCGMaAj0AtAEjcT5pPIi7z2FQ3jtP6q5Is_w-VWyoaSSPE_YVg9iB8RzQG)

* Under “Filters”, ignore “By context” and select “Galley” under “By object type…”
* Ignore “By geo location”

![](https://lh4.googleusercontent.com/4yXJ-ctenNxwwF7_vdIpbbdVHDwbfqA82LhvVK_p9i_SVgXMdJlASDcb5Os-28On6jKxG8cLsXCjaST_JDjd1g-txLrxBeaW3vBcmpu_hm3hKgmOVRd7u2wHGfFFVGu6FvnQKRIk)

* Under “Order by”, select “Count” from the left dropdown box and “Descending” from the right dropdown box.

![](https://lh3.googleusercontent.com/h7XugMr8ws2cuht4_HoDDj07Aa8CQ9mYoePiOmp33XHW6qKKRBWphNU450bIyeKFajW2I0AF-buXDvLC_W9S2iTYf_Zj7a4jwfPYjElcuksLpVt0l_S7fNO5NfVouB_8YZiKReJl)

* Run your report.  Here is what you'll get:

![](https://lh4.googleusercontent.com/7RMRaHCBbkV7xh8iq7RZfTNu1w7YxhO0b6mV2908s_-GsM__i64hw1dHp0RbquLtzj4_6oQydkWes8hs_2foMDkWQT8sYTe1qUrl0es1HLxbGyjkZVTjXHPP38c8x6RRmCzdWSDW)

## **Example: What countries are downloading our articles \(for a specific date interval\)?**

This query will display aggregate counts for fulltext downloads by country in descending order. Note that one will need to specify a date range.  

* Select “Article file downloads” from the dropdown box.
* Uncheck all boxes under “Aggregate stats by”
* Select the “Month” radio button and enter a date range

![](https://lh3.googleusercontent.com/OMryahCavInrr9VI6OhQ8sVQBsOW8QXQZ8ku_e-lOQKE3alP4HEuAYn0Tr4ec1FFWbiVk-zScwvkot-CPhr-dxrcoQVmGokphWTxdBBVtf4HslT6AX3cQIX3OGX7SGAGpuXO9CWl)

* Select only “Journal” and “Country” under Columns. We’ll be narrowing down the type at a later point in the query.

![](https://lh6.googleusercontent.com/VWF3QtcmKOYz8EmkELIrThy31EqU0JJFo5KSUmbix_jQxVw8FyVcWQc5lo10ykj6Lp6BFKp9A0BuIgQ_pIqLTkUdDYO9nj1uQ7E90huN5CXL9K8J3On9k-I4tpmwBkSCjwLhyK77)

* Ignore the “By context” area, but select “Galley” under “by object type”. This will ensure that you’re looking at all possible article downloads \(for all galley types\).

![](https://lh4.googleusercontent.com/DEXxdA7mIl9Ydc3316HgqsuSTJzq17eFlvduGUft7HnXmJJt96ArXBFTf-W3OqV_X3bZJ3Vm0nXtKB9QBEV8k8AAyxmbLA1joiw6HufVqM2j0NAipJfyvrLLxw-hYK5X5PNGjHa-)

* Under “Order by”, select “Count” from the left dropdown box and “Descending” from the right dropdown box.

![](https://lh5.googleusercontent.com/d_3qS0tmL2OL0TyOCNm93woC2KLCytRXoeIIs9BzcpJIU4pK_e6kk1L_SdXaJ1LIVz1CL7MZvg4mkTqsNu1A7F8RQA7YIrPn84Kjn65DFJHVfxycqQcPnQvaQGJ-8v-Kd8Fov-TH)

* Run the report...here’s what you’ll get…
* Don’t forget to save your URL to run at a later date

![](https://lh4.googleusercontent.com/L1GghbRsng68WpYdY-SFbsTvcLc9MjdKfOXRzMHpCgiBzRxrATY_1dU2HVLWxJo1SdkTIgxhj1rHqjXhw8S5p6Mr3-_PvDlYn4JZbpM6kboSDQmcwgcUkuz3PeqcyOYSHTYzA15t)



