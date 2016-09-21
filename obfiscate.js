function obfiscatessn(ssn)
 {
    if((!ssn))
        return 'XXX-XX-----';

    if (ssn.length >= 9)
        return 'XXX-XX-' + ssn.substring(5, 9);

    if (ssn.length == 8)
    {
        var s = '';
        var startIdx = ssn.length - 3; 
        var endIdx = ssn.length - 1;
        console.log(startIdx);
        console.log(endIdx);

        for (var i = startIdx; s.length < endIdx - 1; i++)  
        {
            console.log('ssn[' + i + '] = ' + ssn[i]);
            if(ssn[i] == undefined)
                break;
            s = s + '' + ssn[i];
        }
        console.log(s);
        return 'XXX-XX--' + s;
    }

    if (ssn.length == 7)
    {
        var s = '';
        var startIdx = ssn.length - 3; 
        var endIdx = ssn.length - 1;
        console.log(startIdx);
        console.log(endIdx);

        for (var i = startIdx; s.length < endIdx - 1; i++)   {
            console.log('ssn[' + i + '] = ' + ssn[i]);
            if(ssn[i] == undefined)
                break;
            s = s + '' + ssn[i];
        }
        console.log(s);
        return 'XXX-XX-' + s[0] + '-' + s.substring(1);
    }

    if (ssn.length == 6)
    {
        var s = '';
        var startIdx = ssn.length - 3; 
        var endIdx = ssn.length - 1;
        console.log(startIdx);
        console.log(endIdx);

        for (var i = startIdx; s.length < endIdx - 1; i++)   {
            console.log('ssn[' + i + '] = ' + ssn[i]);
            if(ssn[i] == undefined)
                break;
            s = s + '' + ssn[i];
        }
        console.log(s);
        return 'XXX-XX--' + s.substring(0, 2)+ '-' + s.substring(s.length - 1);
    }

    if (ssn.length == 5)
    {
        var s = '';
        var startIdx = ssn.length - 3; 
        var endIdx = ssn.length - 1;
        console.log(startIdx);
        console.log(endIdx);

        for (var i = startIdx; s.length < endIdx - 1; i++)   {
            console.log('ssn[' + i + '] = ' + ssn[i]);
            if(ssn[i] == undefined)
                break;
            s = s + '' + ssn[i];
        }
        console.log(s);
        return 'XXX-XX-' + s[0] + '-' + s.substring(1, s.length);
    }

    if (ssn.length == 4)
    {
        var s = '';
        var startIdx = ssn.length - 3; 
        var endIdx = ssn.length;
        console.log(startIdx);
        console.log(endIdx);

        for (var i = startIdx; s.length < endIdx; i++)   {
            console.log('ssn[' + i + '] = ' + ssn[i]);
            if(ssn[i] == undefined)
                break;
            s = s + '' + ssn[i];
        }
        console.log(s);
        return 'XXX-XX-' + s.substring(0, 2) + '-' + s[s.length-1];
    }

    if (ssn.length == 3)
    {
        var s = '';
        var startIdx = ssn.length - 3; 
        var endIdx = ssn.length;
        console.log(startIdx);
        console.log(endIdx);

        for (var i = startIdx; s.length < endIdx; i++)   {
            console.log('ssn[' + i + '] = ' + ssn[i]);
            if(ssn[i] == undefined)
                break;
            s = s + '' + ssn[i];
        }
        console.log(s);
        return 'XXX-XX--' + s.substring(0);
    }

    if (ssn.length == 2)
    {
        var s = '';
        var startIdx = 0; 
        var endIdx = ssn.length;
        console.log(startIdx);
        console.log(endIdx);

        for (var i = startIdx; s.length < endIdx; i++)   {
            console.log('ssn[' + i + '] = ' + ssn[i]);
            if(ssn[i] == undefined)
                break;
            s = s + '' + ssn[i];
        }
        console.log(s);
        return 'XXX-XX---' + s.substring(0);
    }

    if (ssn.length == 1) {
        return 'XXX-XX----' + ssn;
    }

    if(ssn.length == 0)
        return 'XXX-XX-----';
 }

//var t = obfiscatessn('123456789');
//console.log(t);

//var t1 = obfiscatessn('12345678');
//console.log(t1);

//var t1 = obfiscatessn('1234567');
//console.log(t1);

//var t1 = obfiscatessn('123456');
//console.log(t1);

//var t1 = obfiscatessn('12345');
//console.log(t1);

//var t1 = obfiscatessn('11123');
//console.log(t1);

//var t1 = obfiscatessn('1234');
//console.log(t1);

//var t1 = obfiscatessn('123');
//console.log(t1);

//var t1 = obfiscatessn('12');
//console.log(t1);

//var t1 = obfiscatessn('1');
//console.log(t1);

//var t = obfiscatessn('');
//console.log(t);

var t = obfiscatessn();
console.log(t);
/*
   if (ssn.length < 9)
    {
        var s = '';
        var startIdx = ssn.length - 1;
        console.log(startIdx);
        for (var i = startIdx; s.length < 5; i--) 
        {
            console.log(ssn[i]);
            s = s + ssn[i];
        }
        console.log(s);
    }
*/