👤 User Management
gam create user <userEmail> firstname <FirstName> lastname <LastName> password <Password>
gam update user <userEmail> suspended on|off
gam delete user <userEmail>
gam info user <userEmail>
gam user <userEmail> show groups

👥 Group Management
gam create group <groupEmail> name <GroupName> description <Description>
gam update group <groupEmail> name <NewGroupName> description <NewDescription>
gam delete group <groupEmail>
gam info group <groupEmail>
gam update group <groupEmail> add member <userEmail>
gam update group <groupEmail> remove member <userEmail>

📧 Aliases
gam create alias <aliasEmail> user <userEmail>
gam delete alias <aliasEmail>
gam info alias <aliasEmail>
gam print aliases

🗂 Organizational Units (OU)
gam create org <OrgUnitPath>
gam delete org <OrgUnitPath>
gam update org <OrgUnitPath> name <NewName>
gam info org <OrgUnitPath>
gam user <userEmail> move <OrgUnitPath>

🔐 Licenses
gam user <userEmail> add license <SKUId>
gam user <userEmail> delete license <SKUId>
gam ou "Sales" add license googlecoordinate
gam group_ns BigTeam sync license gsuiteenterpriseforeducation

🛡 Security
gam user <userEmail> show security
gam user <userEmail> check user
gam user <userEmail> show tokens
gam user <userEmail> delete token clientid <ClientID>
gam user <userEmail> show backupcodes
gam user <userEmail> update backupcodes

📊 Reporting & Auditing
gam report users todrive
gam report logins user user@domain.com start 2025-06-01 end 2025-06-08 todrive
gam report usage customer parameters accounts,lastlogin start_date 2025-01-01 end_date 2025-06-01 todrive
gam report domain fields accounts,teams_count date 2025-06-08

✉️ Email Settings & Routing
gam user <userEmail> signature <signature>
gam user <userEmail> forward to <forwardEmail> keep|delete|markread
gam user <userEmail> vacation subject <subject> message <message> enable|disable
gam all users create gmailfilter subject "urgent" forward to:manager@domain.com
gam all users delete gmailfilter query "from:spam@evil.com"

🖨 Printer & Cloud Print
gam print printers query "department=Finance" todrive
gam update printer Printer123 public true dailyQuota 100
gam printjob Printer123 cancel older_than 1h
gam printjob Printer123 submit /path/to/handbook.pdf tag "handbook"

📱 Mobile & Device Management
gam print mobile query "status=active" todrive
gam info mobile deviceId123
gam update mobile deviceId123 action wipe
gam update mobile deviceId456 action block

🧩 Custom Schemas & Directory Fields
gam create schema EmployeeInfo field EmployeeID type string index restricted endfield
gam update schema EmployeeInfo field Dept type string multivalued endfield
gam print schemas
gam delete schema EmployeeInfo

🔄 Data Migration & Transfer
gam create datatransfer alice@domain.com drive bob@domain.com
gam info datatransfer DATATRANSFER_ID
gam print datatransfers newowner bob@domain.com status completed

🎓 Classroom Management
gam create course CS101 alias cs101@domain.com name "Intro to CS" section "Fall2025"
gam course cs101 add student student1@domain.com
gam print courses teacher prof@domain.com todrive
gam delete course cs101

🛠 Projects & Developer Setup
gam version
gam user admin@domain.com check serviceaccount
gam oauth refresh

📁 CSV-Powered Bulk Operations
Bulk Group Creation

CSV

group,name,members
eng@domain.com,Engineering,alice@domain.com;bob@domain.com


Commands

gam csv groups.csv gam create group "~group" name "~name"
gam csv groups.csv gam update group "~group" add members users "~members"

Advanced CSV Example
gam print groups | gam csv – gam update group ~Email includeInGlobalAddressList false

gam csv GradYearP1P2.csv \
  keyfield GradYear \
  keypattern '20(..)' \
  keyvalue '\1-parents@domain.com' \
  datafield P1Email:P2Email \
  gam update groups sync member csvdata P1Email:P2Email

📬 Gmail Advanced Operations
gam all users delete gmailfilter query "from:(no-reply@spam.com)"
gam user manager@domain.com show delegates
gam user alice@domain.com delete delegate bob@domain.com
