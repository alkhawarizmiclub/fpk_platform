<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {

            display: flex;
            width: 65vw;
            height: 95vh;
        }

        .box {
            font-weight: bold;
            border: 1px solid black;
            height: 100px;
            width: 85%;
            text-align: center;
            margin-top: 70px;
            margin-left: 57px;
        }

        .fpk {
            margin-left: 57px;
        }

        .box1 {
            font-weight: bold;
            border: 1px solid black;
            height: 40px;
            width: 50%;
            text-align: center;
            padding-top: 25px;
            margin-left: 195px;
        }

        table {

            font-size: 12px;
            width: 95%;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid #000;
            padding: 8px;
            text-align: center;
            word-wrap: break-word;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>
    <div class="box">
        <p>
            Université Sultan Moulay Slimane Béni Mellal
        </p>
        <p>
            Année universitaire 2023/2024
        </p>
    </div>
    <p style="margin-left: 57px;">Faculté Polydisciplinaire de Khouribga </p>
    <div class="box1">
        RELEVE DE NOTES ET RESULTATS <br/>
        Semestre {{$semestre}}
    </div>
    <br>
    <br>
    <p style="margin: 0;margin-left: 57px;">Nom et Prenom: {{$student->firstname.' '.$student->lastname}}</p>
    <p style="margin: 0;margin-left: 57px;">N' Étudiant : {{$student->apogee}}</p>
    <p style="margin: 0;margin-left: 57px;"> CNE: {{$student->id_num}}</p>

    <p style="margin: 0;margin-left: 57px;">Né le : {{$student->birth_place}}</p>
    <p style="margin: 0;margin-left: 57px;">inscrit en : <strong>{{$filiere}}</strong></p>
    <br />
    <table style="margin: 0;margin-left: 20px;">
        <thead>
            <tr>
                <th style="width: 35%;"></th>
                <th style="width: 15%;">Note/Barème</th>
                <th style="width: 15%;">Resultat</th>
                <th style="width: 25%;">Pts jury</th>
            </tr>
        </thead>
        <tbody>
            @foreach($data as $d)
            <tr>
                <td>{{$d->module_name}}</td>
                <td>{{$d->note}}</td>
                <td>{{$d->status}}</td>
                <td></td>
            </tr>
            @endforeach

            <tr>
                <td>Résultat d'admission session 1</td>
                <td>{{$note}}</td>
                <td>{{$status}}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <p>à KHOURIBGA, le {{$date}}</p>
    <p>Le Doyen de la Faculté Polydisciplinaire Khouribga</p>

</body>

</html>
