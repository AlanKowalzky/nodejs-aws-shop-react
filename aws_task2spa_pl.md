
Wymagania wstępne
Zainstaluj najnowszą wersję AWS CDK ( https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html )
Skonfiguruj dane uwierzytelniające dla AWS, aby udostępnić je w interfejsie AWS CLI i CDK
Aplikacja jednostronicowa Fork React Shop z https://github.com/rolling-scopes-school/nodejs-aws-shop-react
Zainstaluj zależności
Sprawdź czy wszystko działa u Ciebie
Architektura
Pełną architekturę programu znajdziesz tutaj .

Skupienie na zadaniu
Więcej informacji na temat koncentracji na zadaniach znajdziesz na poniższym obrazku.


Zadania
Zadanie 2.1
Wdrażanie ręczne

W konsoli AWS utwórz i skonfiguruj kontener S3, w którym będziesz hostować swoją aplikację (postępuj zgodnie z instrukcjami zawartymi w materiałach szkoleniowych).
Zbuduj i ręcznie prześlij aplikację MyShop! do utworzonego kontenera S3. Sprawdź , czy aplikacja jest dostępna przez internet http://{your-bucket-name}.s3-website-{aws-region}.amazonaws.com.
Utwórz dystrybucję CloudFront dla swojej aplikacji, zgodnie z opisem w materiałach szkoleniowych. Sprawdź zmiany w polityce kontenera S3. Sprawdź , czy aplikacja jest dostępna przez internet pod podanym adresem URL CloudFront.
Wprowadź drobne, ale widoczne zmiany w aplikacji, skompiluj je i prześlij do swojego kontenera, a następnie utwórz unieważnienie dystrybucji CloudFront.
Zadanie 2.2
Automatyczne wdrażanie

Dodaj i skonfiguruj tworzenie kontenera S3 oraz wdrażanie witryny za pomocą AWS CDK. Dodaj niezbędne skrypty npm, aby automatycznie kompilować i wdrażać aplikację z komputera. Sprawdź , czy wszystko działa poprawnie.
UWAGA: Po przesłaniu kompilacji aplikacji do kontenera S3 należy ręcznie utworzyć unieważnienie CloudFront.

Zniszcz infrastrukturę AWS (bucket S3 i dystrybucję CloudFront) utworzoną w poprzedniej części i krokach. Upewnij się, że nic nie zostało.
Dodaj i skonfiguruj dystrybucję i unieważnianie CloudFront za pomocą AWS CDK. Dodaj niezbędne skrypty npm, aby skompilować, przesłać do kontenera S3 i unieważnić pamięć podręczną CloudFront z poziomu komputera w sposób automatyczny. Sprawdź , czy wszystko działa poprawnie i czy wszystkie zmiany są widoczne w internecie.
UWAGA: Teraz, gdy masz tę wtyczkę, nie musisz już ręcznie tworzyć unieważnień CloudFront.

Zadanie 2.3
Zapisz odnośniki do adresu URL CloudFront i witryny S3 w pliku README.md.
Zatwierdź całą swoją pracę w oddzielnej gałęzi (np. task-2od najnowszej main) w swoim własnym repozytorium.
Utwórz żądanie ściągnięcia do maingałęzi.
Prześlij link do żądania ściągnięcia na stronę Crosscheck w aplikacji RS .
Kryteria oceny wdrożenia ręcznego (70 punktów)
Dla tych, którzy korzystają ze strony internetowej AWS, aby ręcznie utworzyć kontener S3 , umieścić pliki projektu z distfolderu, skonfigurować wszystkie niezbędne zasady i utworzyć CloudFront

Twoje żądanie ściągnięcia będzie zawierało opis wykonanej pracy:

30 punktów – (jeśli tylko ta praca zostanie wykonana) S3 Bucket zostało utworzone i skonfigurowane poprawnie. ApplicationZostało przesłane S3 Bucketi jest dostępne w Internecie, ale pozostałe wymagania nie zostały spełnione.
(np.: podano tylko link do kontenera/strony internetowej S3 i otwiera się aplikacja – należy ocenić ją jako 30)

40 - (Oprócz poprzedniej oceny) – CloudFronttworzona i poprawnie konfigurowana jest dystrybucja; Applicationjest ona teraz obsługiwana CloudFronti dostępna w Internecie za pośrednictwem CloudFrontadresu URL.
Ze względu na zmiany w S3 Bucket:

CloudFrontPodano adres URL, po czym otwarto statyczną witrynę internetową.
S3 BucketW adresie URL wyświetlany jest błąd 403 Odmowa dostępu .
UWAGA: Wykonanie tego zadania oznacza, że ​​otrzymasz punkty za oba zadania (70 punktów).

Kryteria oceny wdrożenia AWS CDK (+30 punktów) (opcjonalnie)
30 - S3 Bucketzostało utworzone, Applicationwdrożone, a CloudFrontdystrybucja i unieważnienie zostały utworzone i skonfigurowane za pomocą AWS CDK. ApplicationMożna je zbudować i wdrożyć, uruchamiając npmpolecenia skryptu.
PullRequestzawiera:
CloudFrontPodano adres URL i otwarto statyczną witrynę internetową
S3 BucketAdres URL pokazuje błąd 403 Odmowa dostępu
opis wykonanej pracy
UWAGA : POWINIENEŚ PRACOWAĆ WE WŁASNYM ROZDZIELONYM REPOZYTORIUM, NIE W WSPÓLNYM

Szablon opisu żądania ściągnięcia
W polu opisu PR powinny znaleźć się następujące informacje:

Co zostało zrobione?
Przykład:

  - [x] Service is done, but FE is not working...
  - [x] Additional scope - webpack, swagger, unit tests
Wszystkie niezbędne linki zgodnie z wymaganiami zadania...