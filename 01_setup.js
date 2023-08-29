/*
    Difference:
        Relational DB:			MongoDB:	
		> Database	   	        > Database
		> Table		            > Collection
		> Row				    > Document
		> Column			    > Field

    show dbs // Show all the databases
        Example:
            show dbs
                admin      40.00 KiB
                config     72.00 KiB
                employees  72.00 KiB
                local      72.00 KiB

    use employees // Use employees database
        Example:
            use employees
                switched to db employees

    //Inserting data:
        db.inventory.insertOne({
            item: "canvas",
            qty: 100,
            tags: ["cotton"],
            size: { h: 28, w: 35.5, uom: "cm" },
        });
        {
            acknowledged: true,
            inserted: ObjectId("38yrg89y3h9whr9i3gr7")
        }
*/
