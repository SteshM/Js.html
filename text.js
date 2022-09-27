<html>
    <head>
        <title>Squareroot</title>
    </head>
    <body>
        <form name = "form">
            <label>Enter a number:</label>
            <input type ="text" name ="input value"/> <br/>
            <input type ="radio" onclick = "square()"/>square <br/>
            <input type ="radio" onclick="cube()"/>cube <br/>
            </form>
            <script>
                function square(){
                    var form = document.form;
                    var input value = form.input value;
                    var cubeoutput =eval.(inputValue.value);
                    document.write("The cube is",cube output);
                }
            </script>
    </body>
</html>

