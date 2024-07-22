<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            padding-top: 30px;
            display: flex;
            width: 55vw;
            height: 95vh;
            /* border: 4px solid black; */

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
            margin-left: 40px;

        }

        p {
            margin: 0;
            padding: 0;
        }

        footer {
            position: fixed;
            left: 0px;
            right: 0px;
            height: 150px;
            bottom: 0px;
            height: 150px;
            margin-bottom: -150px;
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="fpk">
        <p st>ROYAUME DU MAROC</p>
        <p>
            Université Sultan Moulay Slimane Béni Mellal
            <p />
        <p>
            Faculté Polydisciplinaire de Khouribga
        </p>
        <p>
            Année universitaire {{$year}}
        </p>
        <br />
        <br />
        <p style="text-decoration: underline;">Service des Affaires Estudiantines</p>

        <br />
        <br />

    </div>

    <p style="text-decoration: underline;font-size: 36px; text-align: center;">ATTESTATION D'INSCRIPTION</p>
    <br />
    <br />
    <br />
    <br />
    <div style="margin-left: 60px;">
        <p>le Doyen de la Faculté Polydisciplinaire Khouribga atteste que l'etudiant:</p>
        <br />
        <p> Monsieur: {{$student->firstname}} {{$student->lastname}}
            <p />
        <p>
            Numero de la carte d'idendité nationale: {{$student->id_num}}
        </p>

        <p>
            Code national de l'etudiant: {{$student->massar_code}}
        </p>

        <p>
            né le {{$student->birth_date}} a {{$student->birth_place}}
        </p>
        <br />
        <p>
            est régulièrement inscrit à la Faculté Polydisciplinaire Khouribga pour
        </p>
        <p>l'année universitaire {{$year}}
            <p />
            <br>
        <p>
            Année: 1ere Année {{$filiere}}
        </p>
        <br />
        <br />
        <p style="margin-left: 350px;">
            Faite à Khouribga le {{$date}}
        </p>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>

    <div style="height: 100; border-top: 1px solid black;border-bottom: 1px solid black;">
        <p>Address: Hey Azzaitouna B.P 145 Khouribga
            <p />
        <p style="margin-left: 60px;">www.fpk.ac.ma
            <p />

        <p style="margin-left: 60px;">Tel: 0523491618FAX: 0523491619
            <p />
    </div>

</body>

</html>
