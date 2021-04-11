# Parses all files from WID and loads them into the DB
from django.core.management.base import BaseCommand, CommandError
import csv
from api.models import Indicator,Country

class Command(BaseCommand):
    help = 'Load pertinent data from WID (located in WID_DATA folder) into DB'

    def handle(self, *args, **options):
        # TODO open all country files in folder 
        with open('/home/olpi/projects/inequality-dashboard/WID_DATA/WID_data_BE.csv') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=';')
            line_count = 0
            # TODO empty previous indicators
            for row in csv_reader:
                if line_count == 0:
                    print(f'Column names are {", ".join(row)}')
                    line_count += 1
                else:
                    if row[1] == "acainc992j":
                        q = Indicator(
                                year = row[3],
                                country = Country.objects.get(code=row[0]),
                                percentile = row[2],
                                value = row[4],
                                variable = row[1],
                            )
                        q.save()
                        line_count += 1
            self.stdout.write(f'Processed {line_count} lines.')

        self.stdout.write(self.style.SUCCESS('Files loaded !'))



