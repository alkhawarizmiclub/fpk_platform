<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header</title>
    <link rel="stylesheet" href="{{ public_path('css/style.css') }}">
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }

        @page {
            margin-top: 150px;
            margin-bottom: 150px;
        }

        header {
            position: fixed;
            left: 0px;
            right: 0px;
            height: 150px;
            margin-top: -150px;
        }

        footer {
            position: fixed;
            left: 0px;
            right: 0px;
            height: 150px;
            bottom: 0px;
            margin-bottom: -150px;
        }

        .titre {
            text-align: center;
            width: 100%;
            height: 50px;
            font-weight: bold;

        }
    </style>
</head>

<body>
    <header>
        <img src="{{public_path("img/header.png")}}" style="width: 100%">
    </header>
    <div>
        <p class="titre">
            {{$module_name}}
            <br>
            Année universitaire: {{$year}}
            <br>
        </p>
    </div>
    <table>
        <thead>
            <tr>
                <th>apogee</th>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Anneé d'inscription</th>
            </tr>
        </thead>
        <tbody>
            @foreach($students as $student)
            <tr>
                <td>{{$student->apogee}}</td>
                <td>{{$student->firstname}}</td>
                <td>{{$student->lastname}}</td>
                <td>{{$student->inscrit_year}}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <footer>
        <img src="{{public_path("img/footer.png")}}" style="width: 100%">
    </footer>
    <main>
        <!-- content here -->
    </main>
</body>

</html>
