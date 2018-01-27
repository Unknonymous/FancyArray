function prettify( x, reversed )
{
    var arr = ["James", "Jill", "Jane", "Jack"];
    if ( reversed != true)
    {
        for (var i = 0; i < arr.length; i++)
        {
            console.log( i + "  " + x + "  " + arr[i]);
        }
    } else if ( reversed = true)
    {
        for (var i = 0; i < arr.length; i++)
        {
        console.log( i + "  " + x + "  " + arr[(arr.length - 1) - i ]);
        }
    }
}

prettify( "<-" , 0)