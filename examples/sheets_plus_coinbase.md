# Using an API: Coinbase API + Google Spreadsheet

- Going to use coinbase.com
- The data we want is at this endpoint: [https://api.coinbase.com/v2/prices/BTC-USD/spot](https://api.coinbase.com/v2/prices/BTC-USD/spot)
- API info is: [http://api.coinbase.com](http://api.coinbase.com)

Let's load this into a Google Spreadsheet, just because we can.

## Steps:

- Open a new Google spreadsheet: `sheets.new`
- Name it "My Coinbase Sheet"
- Go to Extensions -> Apps Script
- At the top, name it "Fetch Coinbase Data"
- Delete all the lines in the main window ( `function myFunction() {}`)
- Copy and paste this block of code into the main window:

```
function onOpen() {

    // this code runs when the spreadsheet is opened
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('API')
      .addItem('Update Bitcoin','callCoinbase')
      .addToUi();
      
}

function callCoinbase() {

    // Call coinbase for the latest data
    var response = UrlFetchApp.fetch("https://api.coinbase.com/v2/prices/BTC-USD/spot");

    var coinbase = JSON.parse(response.getContentText());
    var sheet = SpreadsheetApp.getActiveSheet();
    
    sheet.getRange(1,1).setValue([coinbase.data.amount]);
    sheet.getRange(1,2).setValue([coinbase.data.currency]);
    sheet.getRange(1,3).setValue(Date());
  
}
```

Click back to your original spreadsheet. There's now an "API" choice in the menu bar. And it has an "Update Bitcoin" dropdown.

Try it!

## Additional Code

You can make append the data to the end of an ongoing list ... (calculate the "row" as the last row plus 1) ... by replacing the current `sheet.getRange...` lines with these three:

```
var new_row = sheet.getLastRow() + 1;
sheet.getRange(new_row, 1).setValue([coinbase.data.amount]);
sheet.getRange(new_row, 2).setValue([coinbase.data.currency]);
sheet.getRange(new_row, 3).setValue(Date());
```

## Extra info

- Many more great [google dashboard examples](https://www.benlcollins.com/spreadsheets/starting-gas/) 
- Also [good dashboard info](https://www.benlcollins.com/apps-script/beginner-apis/).
- Which is also available at [another site](https://github.com/benlcollins/apps_script_apis/blob/master/for_website/001_numbers.gs).
- Note we added in `JSON.parse(data)` to those examples
