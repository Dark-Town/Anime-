<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anime Facts</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Anime Facts</h1>
        <form method="POST" action="">
            <select name="anime_name">
                <option value="naruto">Naruto</option>
                <option value="one_piece">One Piece</option>
                <option value="attack_on_titan">Attack on Titan</option>
                <option value="my_hero_academia">My Hero Academia</option>
                <option value="demon_slayer">Demon Slayer</option>
                <option value="death_note">Death Note</option>
                <option value="sword_art_online">Sword Art Online</option>
                <option value="fullmetal_alchemist">Fullmetal Alchemist</option>
                <option value="tokyo_ghoul">Tokyo Ghoul</option>
                <option value="fairy_tail">Fairy Tail</option>
            </select>
            <button type="submit">Get Facts</button>
        </form>
        <div id="factsContainer">
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $animeName = $_POST['anime_name'];
                $apiUrl = "https://anime-facts-rest-api.herokuapp.com/api/v1/$animeName";

                $response = file_get_contents($apiUrl);
                $data = json_decode($response, true);

                if (isset($data['data']) && count($data['data']) > 0) {
                    foreach ($data['data'] as $fact) {
                        echo "<p>$fact</p>";
                    }
                } else {
                    echo "<p>No facts found for this anime.</p>";
                }
            }
            ?>
        </div>
    </div>
</body>
</html>
