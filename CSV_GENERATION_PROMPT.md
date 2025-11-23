# ChatGPT Prompt for Generating New Leads CSV

Copy and paste this prompt to ChatGPT:

---

**Create a CSV file for a new leads management system with the following specifications:**

## CSV Structure

The CSV file should have the following columns (in this exact order):
1. **name** - Full name of the lead (e.g., "John Smith", "Sarah Johnson")
2. **email** - Valid email address (must be unique, no duplicates)
3. **phone** - Phone number (format: +1-555-123-4567 or leave empty for some records)
4. **tags** - Comma-separated tags/categories (e.g., "Hot Lead,Enterprise,Software" or "New,Retail,Follow-up"). Each lead can have 1-4 tags. Use realistic business tags like: "Hot Lead", "Warm Lead", "Cold Lead", "Enterprise", "SMB", "Retail", "Software", "E-commerce", "Follow-up", "New", "Returning", "VIP", "Qualified", "Unqualified"
5. **callStatus** - One of: "PENDING", "InProgress", or "COMPLETED" (use COMPLETED for converted leads)
6. **createdAt** - Date in format: YYYY-MM-DD (should be within the last 30 days for "new leads", with some variety)
7. **updatedAt** - Date in format: YYYY-MM-DD (can be same as createdAt or slightly later)

## Data Requirements

- Generate **50-100 rows** of realistic lead data
- **Email addresses must be unique** - no duplicates
- **Names should be diverse** - mix of first and last names, various ethnicities
- **Phone numbers** - Include for about 70% of leads, leave empty for 30%
- **Tags distribution:**
  - About 30% should have "Hot Lead" or "Warm Lead"
  - About 20% should have "Enterprise" or "SMB"
  - Mix other tags appropriately
  - Each lead should have 1-4 tags
- **callStatus distribution:**
  - 40% should be "PENDING"
  - 30% should be "InProgress"
  - 30% should be "COMPLETED" (these are converted leads)
- **Date distribution:**
  - All dates should be within the last 30 days
  - Mix dates throughout the month (some recent, some older)
  - updatedAt should be same or later than createdAt
  - For COMPLETED leads, updatedAt should typically be later than createdAt

## Sample Data Format

```csv
name,email,phone,tags,callStatus,createdAt,updatedAt
John Smith,john.smith@example.com,+1-555-123-4567,"Hot Lead,Enterprise,Software",COMPLETED,2024-12-15,2024-12-18
Sarah Johnson,sarah.j@techcorp.com,+1-555-234-5678,"Warm Lead,SMB,Retail",InProgress,2024-12-20,2024-12-22
Michael Chen,mchen@startup.io,,"New,Follow-up,E-commerce",PENDING,2024-12-25,2024-12-25
```

## Important Notes

- Ensure email addresses are realistic and varied (use different domains)
- Make names sound professional and diverse
- Tags should be comma-separated within quotes if they contain spaces
- Dates should create a realistic timeline (newer leads more recent)
- COMPLETED status should correlate with slightly older dates (they took time to convert)
- Include some leads with no phone number (empty field)
- Make the data realistic for a sales/lead management context

**Please generate the CSV file with proper formatting, including the header row, and ensure all data follows these specifications.**

